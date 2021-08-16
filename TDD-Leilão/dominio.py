import sys

class Usuarios:
    
    def __init__(self, nome):
        self.__nome = nome
    
    @property
    def nome(self):
        return self.__nome
    
class Lance:
    
    def __init__(self, usuario, valor):
        self.usuario = usuario 
        self.valor = valor   


class Leilao:
    
    def __init__(self, objeto_leiloado):
        
        self.objeto_leiloado = objeto_leiloado
        self.__lances = []
        self.maior_lance = sys.float_info.min
        self.menor_lance = sys.float_info.max
    
    """ O método propoe fica sendo o responsável por adicionar um lance a lista. 
    Dessa forma, escondemos, isto é, encapsulamos a implementação da classe. 
    Mas ainda conseguimos adicionar um lance sem utilizar o método propoe. 
    Isso acontece porque estamos devolvendo a mesma lista de lances da classe Leilao. 
    Ou seja, precisamos devolver outra lista.
    
    Como temos uma property que retorna lances,
    para usarmos o metodo propoe e não lances diretamente
    retornamos como copia "[:]" sendo ela uma cópia rasa """
    
    def propoe(self, lance : Lance):
        
        if lance.valor > self.maior_lance:
            self.maior_lance = lance.valor
        if lance.valor < self.menor_lance:
            self.menor_lance = lance.valor 
            
        self.__lances.append(lance)
        
    
    """ 
     """
    
    @property
    def lances(self):
        return self.__lances[:]
    
    
           
                
        