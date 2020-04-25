from urllib import request, parse
import json

url = 'https://neutrinoapi.net/ip-info'
params = {
  'user-id': 'gedda',
  'api-key': 'T4Uy3NSdwErd5EVEkmbi3lqQSd0pUg330V2ASBiiSodgHaZs',
  'ip': '130.102.13.11'
}

postdata = parse.urlencode(params).encode()
req = request.Request(url, data=postdata)
response = request.urlopen(req)
result = json.loads(response.read().decode("utf-8"))

print(result)