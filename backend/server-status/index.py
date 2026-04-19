"""
Мониторинг сервера через SSH.
Credentials и список допустимых команд берутся из зашифрованных секретов окружения.
Требует заголовок X-Admin-Token для авторизации.
"""
import os
import json
import base64
import paramiko


def handler(event: dict, context) -> dict:
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    # Auth
    token = event.get('headers', {}).get('X-Admin-Token', '')
    expected = os.environ.get('ADMIN_TOKEN', '')
    if not expected or token != expected:
        return {'statusCode': 401, 'headers': cors, 'body': json.dumps({'error': 'Unauthorized'})}

    # Parse body
    try:
        body = json.loads(event.get('body') or '{}')
    except Exception:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Invalid JSON body'})}

    command = body.get('command', '').strip()
    if not command:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'command is required'})}

    # Load whitelist from secret
    try:
        raw_commands = os.environ['SERVER_COMMANDS']
        allowed_commands = json.loads(base64.b64decode(raw_commands).decode('utf-8'))
    except Exception as e:
        return {'statusCode': 500, 'headers': cors, 'body': json.dumps({'error': f'Failed to load SERVER_COMMANDS: {e}'})}

    if command not in allowed_commands:
        return {'statusCode': 403, 'headers': cors, 'body': json.dumps({'error': 'Command not in whitelist', 'allowed': allowed_commands})}

    # Load credentials from secret
    try:
        raw_creds = os.environ['SERVER_CREDENTIALS']
        creds = json.loads(base64.b64decode(raw_creds).decode('utf-8'))
        host = creds['host']
        port = int(creds.get('port', 22))
        username = creds['username']
        password = creds['password']
    except Exception as e:
        return {'statusCode': 500, 'headers': cors, 'body': json.dumps({'error': f'Failed to load SERVER_CREDENTIALS: {e}'})}

    # Execute via SSH
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(host, port=port, username=username, password=password, timeout=10)
        stdin, stdout, stderr = client.exec_command(command, timeout=15)
        out = stdout.read().decode('utf-8', errors='replace')
        err = stderr.read().decode('utf-8', errors='replace')
        exit_code = stdout.channel.recv_exit_status()
    except Exception as e:
        return {'statusCode': 502, 'headers': cors, 'body': json.dumps({'error': f'SSH connection failed: {e}'})}
    finally:
        client.close()

    return {
        'statusCode': 200,
        'headers': {**cors, 'Content-Type': 'application/json'},
        'body': json.dumps({
            'command': command,
            'stdout': out,
            'stderr': err,
            'exit_code': exit_code,
        }),
    }
