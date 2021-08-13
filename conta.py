class Conta:
    def __init__(self, numero, titular, saldo, limite=1000.0):
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite
        
    def extrato(self):
        print(f'O saldo de {self.__titular} é {self.__saldo}')
     
        
    def deposito(self, valor):
        self.__saldo += valor
        
        
    def saque(self, valor):
        valor_disponivel = self.__saldo + self.__limite
        if valor <= valor_disponivel:
            self.__saldo -= valor
        else:
            print('Saldo  insuficiente!')
        
    def transferencia(self, valor, destino):
        self.saque(valor)
        destino.deposito(valor)   
    
    # Getter    
    @property
    def titular(self):
        return self.__titular.title()
    
    # Getter 
    @property
    def saldo(self):
        return self.__saldo
    
    # Getter 
    @property
    def limite(self):
        return self.__limite
    
    # Setter
    @limite.setter
    def limite(self, limite):
        self.__limite = limite
        