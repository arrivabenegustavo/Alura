from functools import total_ordering
'''Função para disponibilizar para os objetos, os operadores de comparação (<=, >=, !=...etc)
   juntamente com o uso das bilt-in (__eq__ '==') e (__lt__'< >') '''

class ContaCorrente:
    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0
        
    def deposita(self, valor):
        self._saldo += valor
        
        
@total_ordering
class ContaSalario:
    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0
    
    # Função poder comparar objetos de igualdade    
    def __eq__(self, other):
        if type(other) != ContaSalario:
            raise TypeError('Objeto diferente. Não pode ser comparado')
        return self._codigo == other._codigo 
    
    # Função para comparar objeto menor
    def __lt__(self, other):
        if self._saldo != other._saldo:
            return self._saldo < other._saldo
        return self._codigo < other._codigo
        
    def deposita(self, valor):
        self._saldo += valor
    
    # Função para imprimir o objeto através de string    
    def __str__(self):
        return f'Código: {self._codigo} / Saldo: {self._saldo}'

    

conta_gu = ContaSalario(4)
conta_gu.deposita(1000)
conta_tha = ContaSalario(2)
conta_tha.deposita(1500)
contas = [conta_gu, conta_tha]

# for conta in sorted(contas):
#     print(conta)

print(conta_gu != conta_tha)