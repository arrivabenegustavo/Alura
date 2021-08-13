class Programa:
    def __init__(self, nome, ano):
        self._nome = nome.title()
        self.ano = ano
        self._likes = 0

    
    @property
    def nome(self):
        return self._nome
    
    @nome.setter
    def nome(self, nome):
        self._nome = nome.title()
        
    def dar_likes(self):
        self._likes += 1
        
    @property
    def likes(self):
        return self._likes
    
    
    '''Retorna um OBJETO como STRING, fazendo com que não seja  necessário
    criar uma função específica e chamar-la  na hora de imprimir dentro o FOR
    EXEMPLO quenão se deve fazer: (pelo menor nesse caso)
    def imprimi(self):
        print({self.nome}, {self.duracao}, {self.temporada}...etc)
    
    for programa in playlist:
        programa.imprimi()
        
    abaixo segue uma das melhores formas para tornar um objeto textual
    e usar o FOR normalmente sem precisar chamar uma função
    '''
    def __str__(self):
        return f'{self._nome} - {self.ano} - {self._likes}'

class Filme(Programa):
    def __init__(self, nome, ano, duracao):
        super().__init__(nome, ano)
        self.duracao = duracao
    
    def __str__(self):
        return f'{self._nome} - {self.ano} - {self.duracao} min - {self._likes} likes'   
    
                  
class Serie(Programa):
    def __init__(self, nome, ano, temporadas):
        super().__init__(nome, ano)
        self.temporadas = temporadas
        
    def __str__(self):
        return f'{self._nome} - {self.ano} {self.temporadas} temp - {self._likes} likes'   

""" class Playlist(list):
    def __init__(self, nome, programas): # recebe o nome da playlist e uma lista
        self.nome = nome
        super().__init__(programas) 
        
    Neste caso a herança até resolve o problema, pois a classe torna-se iterável por herdar uma LIST
    porem, acaba herdando muito mais do que necessário, ou seja, tudo o que a função bilt-in LIST tem
    e ficando restrita a uso apenas de lista. Queremos apenas a funcionalidade de iteração
    que a função LIST possui, por isso, nesse caso A HERANÇA NÃO CONVÉM"""
     
     
class Playlist:
    def __init__(self, nome, lista_programas):
        self.nome = nome
        self._programas = lista_programas
    
    def __getitem__(self, item):
        return self._programas[item] 
    # O método __getitem__ faz com que o objeto retorne 
    # como iterador para ter comportamentos similar a list          
    
    def __len__(self):
        return len(self._programas)
    # Esse método faz com que possa ser medido o tamanho do objeto
    # ou seja, neste caso, conta os programas dentro de um atributo tipo list
    
    
john_wick = Filme('de volta ao jogo', 2017, 121) 
ragnar = Serie('vikings', 2010, 5)
blade = Filme('blade - trinit', 2010, 120) 
spfc = Filme('são paulo futebol clube', 1935, 100) 
scofield = Serie('prison break', 2005, 5)
john_wick.dar_likes()
john_wick.dar_likes()
blade.dar_likes()
blade.dar_likes()
spfc.dar_likes()
scofield.dar_likes()
scofield.dar_likes()



filmes_series = [john_wick, ragnar, blade, spfc, scofield]
playlist = Playlist('Maratonar', filmes_series)

print()
print(f'A playlist {playlist.nome} contem {len(playlist)} programas\n')

for programa in playlist:
    print(programa)
