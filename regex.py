# https://bytebank.com.br/cambio


import re

url = 'http://www.bytebank.com.br/cambio'

padrao_url = re.compile('(http(s)?://)?(www.)?bytebank.com(.br)?/cambio')
'''(abc)? existe exatamente abc ou não existe nada'''

match = padrao_url.match(url) 
# compara se a string inteira(URL) tem exatamente o mesmo padrão(padrao_url)

if not match:
    raise ValueError('A URL não é válida')

print('A URL é válida')
