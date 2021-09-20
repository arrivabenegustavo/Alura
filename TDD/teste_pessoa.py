'''
TDD - Test driven development (Desenvolvimento dirigido a testes)

Fases do TDD:

Red
Parte 1 -> Criar o código e ver o teste falhar;

Green
Parte 2 -> Criar o código e ver o teste passar,

Refactor
Parte 3 -> Melhorar o código

'''


import unittest
from pessoa import Pessoa

class TestPessoa(unittest.TestCase):
    
    def setUp(self): # Este metodo executa antes de cada teste
        self.p1 = Pessoa('Gustavo', 'Arrivabene')
        """ instancia para executar antes de cada teste para não precisar
        criar uma instancia para cada teste """
            
    def test_pessoa_atributo_nome_tem_o_valor_correto(self):
        self.assertEqual(self.p1.nome,'Gustavo')
        
    def test_pessoa_atributo_nome_e_str(self):
        self.assertIsInstance(self.p1.nome, str)
        
    def test_pessoa_atributo_sobrenome_tem_o_valor_correto(self):
        self.assertEqual(self.p1.sobrenome, 'Arrivabene')
        
    def test_pessoa_atributo_sobrenome_e_str(self):
        self.assertIsInstance(self.p1.nome, str)
            
    def test_pessoa_atributo_dados_obtidos_inicia_false(self):
        self.assertEqual(self.p1.dados_obtidos, False)

if __name__ == '__main__':    
    unittest.main(verbosity=2)