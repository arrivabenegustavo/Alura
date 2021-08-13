import requests

class BuscaEndereco:
    def __init__(self, cep):
        if self.valida_cep(cep):
            self.cep = str(cep)
        else:
            raise ValueError('CEP inválido!!')
    
    def __str__(self):
        return self.formata()
    
    def valida_cep(self, cep):
        if len(cep) == 8:
            return True
        else:
            return False
        
    def formata(self): # xxxxx - yyy
        return f'{self.cep[:5]}-{self.cep[5:]}'
    
    def acessa_api_viacep(self):
        url = f'https://viacep.com.br/ws/{self.cep}/json/'
        r = requests.get(url) # pega o que foi solicitado
        dados = r.json() # retorna com um tipo dicionário
        return (
            dados['bairro'],
            dados['localidade'],
            dados['uf']
        ) 