import requests
from acesso_cep import BuscaEndereco


cep = '06180080'
objeto_cep = BuscaEndereco(cep)
bairro, cidade, estado = objeto_cep.acessa_api_viacep()
print(bairro, cidade, estado)

# r = requests.get('https://viacep.com.br/ws/01001000/json/')
# print(r.text)

