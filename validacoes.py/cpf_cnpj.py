from validate_docbr import CPF, CNPJ
# Este pacote contém todas as validações de documentos

class Documento:
    
    
    """Bloco 8 a 16 representa uma FACTORY, considerada uma boa prática de programação
       Neste caso, é responsável por chamar uma classe conforme documento passado
       Ou seja, uma FACTORY é uma classe que chama outra classe
    """
    @staticmethod
    def cria_documento(documento):
        documento = str(documento)
        if len(documento) == 11:
            return DocCpf(documento)
        elif len(documento) == 14:
            return DocCnpj(documento)
        else:
            raise ValueError('Quantidade de dígitos inválida!')


class DocCpf:
    def __init__(self, documento):
        if self.valida(documento):
            self.cpf = documento
        else:
            raise ValueError('CPF inválido!')   
        
    def __str__(self):
        return self.formata()
     
    def valida(self, documento):
        validador = CPF()
        return validador.validate(documento)

    def formata(self):
        mascara = CPF()
        return mascara.mask(self.cpf)
    
    
class DocCnpj:
    def __init__(self, documento):
        if self.valida(documento):
            self.cnpj = documento
        else:
            raise ValueError('CNPJ inválido!')
   
    def __str__(self):
        return self.formata()
   
    def valida(self, documento):
        validador = CNPJ()
        return validador.validate(documento)
    
    def formata(self):
        mascara = CNPJ()
        return mascara.mask(self.cnpj)
    
    

    
   
                 
    
    
   