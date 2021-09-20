import re

class ExtratorUrl:
    def __init__(self, url):
       self.url = self.sanitiza_url(url)
       self.valida_url()
    
    # Caso seja informado, retorna a url removendo espaços em branco   
    def sanitiza_url(self, url):
        if type(url) == str:
            return url.strip()
        else:
            return ''
    
    '''Nessa validação (if not self.url), Se self.url for falso, entra no if
       pois se passada uma STRING qualquer o Python considera como VERDADEIRO
       caso seja (""vazio) ou None(também considerado como vazio, porem tem sua propria class)
       no Python é considerado com valor FALSO'''
    # Valida se a url está vazia e se segue um padrão
    def valida_url(self):
        if not self.url:
            raise ValueError('A URL está vazia')
        
        padrao_url = re.compile('(http(s)?://)?(www.)?bytebank.com(.br)?/cambio')
        match = padrao_url.match(self.url)
        if not match:
            raise ValueError('A URL não é válida')
           
    # Retorna a base da url
    def get_url_base(self):
        indice_interrogacao = self.url.find('?')
        url_base = self.url[:indice_interrogacao]
        return url_base
    # Retorna os parâmetros da url
    def get_url_parametro(self):
        indice_interrogacao = self.url.find('?')
        url_parametro = self.url[indice_interrogacao+1:]
        return url_parametro
    
    # Retorna o valor do parâmetro a ser buscado
    def get_url_valor(self, busca_parametro):
        indice_inicio_parametro = self.get_url_parametro().find(busca_parametro)
        indice_inicio_valor = indice_inicio_parametro + len(busca_parametro) + 1
        indice_e_comercial = self.get_url_parametro().find('&', indice_inicio_valor) 
        if indice_e_comercial == -1:
            valor = self.get_url_parametro()[indice_inicio_valor:]
        else:
            valor = self.get_url_parametro()[indice_inicio_valor:indice_e_comercial]
        return valor    
    
    # Transforma o objeto para leitura no Print
    def __str__(self):
        return f'URL: {self.url}\nURL Base: {self.get_url_base()}\nURL Parâmetro: {self.get_url_parametro()}'   
    
    # Retorna um objeto possível de ler o tamanho
    def __len__(self):
        return len(self.url) 
    
    '''Compara os OBJETOS, pois tratando-se de objetos, mesmo sendo iguais, são armazenados
       em lugares diferentes na memória, e no caso de objetos o Python compara a identidade
       que seria esse lugar armazenado na memória (linhas 72 e 73), portanto, para o python usar o conteudo e não
       a identidade, usamos este método para comparar igualdade...conforme comparação na linha 71'''
    def __eq__(self, other):
        return self.url == other.url  
              
url = 'bytebank.com/cambio?quantidade=100&moedaDestino=dolar&moedaOrigem=real'        
extrator_url = ExtratorUrl(url)
VALOR_DOLAR = float(5.50)
quantidade = extrator_url.get_url_valor('quantidade')
moeda_origem = extrator_url.get_url_valor('moedaOrigem')
moeda_destino = extrator_url.get_url_valor('moedaDestino')

if moeda_origem == 'real' and moeda_destino == 'dolar':
    valor_conversao = int(quantidade) / VALOR_DOLAR
    print(f'O valor de R$ {quantidade} é igual a {valor_conversao:2f} dolar' )
elif moeda_origem == 'dolar' and moeda_destino == 'real':
    valor_conversao = int(quantidade) * VALOR_DOLAR
    print()
    




# extrator_url2 = ExtratorUrl('bytebank.com/cambio?quantidade=100&moedaDestino=dolar&moedaOrigem=real')
# print()
# print(f'Tamanho da URL: {len(extrator_url)}')
# print(extrator_url)
# print(extrator_url == extrator_url2)
# print(id(extrator_url))
# print(id(extrator_url2))

# valor_quantidade = extrator_url.get_url_valor('quantidade')
# print(valor_quantidade)
