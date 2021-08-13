import re

class Telefone:
    def __init__(self, telefone):
        if self.valida(telefone):
            self.telefone = telefone
        else:
            raise ValueError('Número incorreto')
    
    def __str__(self):
        return self.formata()
    
    def valida(self, telefone):
        padrao = '([0-9]{2})?([0-9]{2})([0-9]{5})([0-9]{4})'
        procura = re.search(padrao, telefone)
        if procura:
            return True
        else:
            return False
        
    def formata(self):
        padrao = '([0-9]{2})?([0-9]{2})([0-9]{4,5})([0-9]{4})'
        procura = re.search(padrao, self.telefone)
        telefone_formatado = f'+{procura.group(1)}({procura.group(2)}){procura.group(3)}-{procura.group(4)}'
        return telefone_formatado