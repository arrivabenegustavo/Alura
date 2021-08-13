# idades = [26, 31, 32, 54]

# nova_idades = [(idade+1) for idade in idades]
# '''isto é Faz isso (idade+) Para(for) cada (idade) dentro(in) de (idades)'''
# print(nova_idades)


# from abc import ABCMeta, abstractmethod

# class Conta(metaclass=ABCMeta):
#     def __init__(self, condigo):
#         self._codigo = condigo
#         self._saldo = 0
        
#     def deposito(self, valor):
#         self._saldo += valor
    
#     def __str__(self):
#         return f'Código {self._codigo} e Saldo {self._saldo}'
    
#     #Obrigado todas as classes filhas terem esse método subscrito
#     @abstractmethod
#     def passa_o_mes(self):
#         pass

# class Corrente(Conta):
#     def passa_o_mes(self):
#         self._saldo -= 2
        

# class Poupança(Conta):
#     def passa_o_mes(self):
#         self._saldo *= 1.01
#         self._saldo -= 3

# class Investimento(Conta):
#     pass


# conta_gu = Corrente(123)  
# conta_gu.deposito(1000)
# print(conta_gu) 

# conta_tha = Poupança(456)
# conta_tha.deposito(1000)
# print(conta_tha)

# conta_lizy = Investimento(567)
# conta_lizy.deposito(200)
# print(conta_lizy)

# contas = (conta_gu, conta_tha)

# for conta in contas:
#     conta.passa_o_mes()
#     print(conta)

class ContaSalario:
    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0
        
        
    def deposita(self, valor):
        self._saldo += valor
        
    def __str__(self):
        return f'Código {self._codigo} - Saldo {self._saldo}'
    
    # Configuração para comparar se um objeto é menor que o outro    
    def __lt__(self, outro):
        return self._saldo < outro._saldo or self._codigo < outro._codigo
    
    #Configura para comparar se um objeto é igual  ao outro, ou seja, se  tem o mesmo conteúdo
    def __eq__(self, outro):
        if type(outro) != ContaSalario:
            raise TypeError('Objeto diferente, não  pode ser comparado')
        return self._codigo == outro._codigo
        
        
conta1 = ContaSalario(15)
conta2 = ContaSalario(222)
conta3 = ContaSalario(21)
conta1.deposita(100)
conta2.deposita(250)
conta3.deposita(100)
contas = [conta1, conta2, conta3]
for conta in sorted(contas):
    print(conta)

# print(conta1 < conta2)



        