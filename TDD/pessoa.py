

'''class Pessoa:
    __init__
        name str
        sobrenome str
        dados obtidos bool (inicia False)
    
    API:
        obter_todos_os_dados -> method
            ok
            404    
'''


class Pessoa:
    def __init__(self, nome, sobrenome):
        self.nome = nome
        self.sobrenome = sobrenome
        self.dados_obtidos = False
