import unittest
from dominio import Usuarios, Lance, Leilao


class TestLeilao(unittest.TestCase):

    """ Através do método setUp, conseguimos criar os objetos utilizados pelos testes. 
    Esse método é executado antes de cada teste, dessa forma, garantimos que um teste 
    não influencia outro, já que sempre teremos novos objetos. """
    def setUp(self):
        self.gu = Usuarios('Gustavo')
        self.tha = Usuarios('Thais')

        self.lance_gu = Lance(self.gu, 200.00)
        self.lance_tha = Lance(self.tha, 350.00)

        self.leilao = Leilao('Celular') 
    
    def test_deve_retornar_o_maior_e_o_menor_lance_quando_adicionados_em_ordem_crescente(self):
        self.leilao.propoe(self.lance_gu)
        self.leilao.propoe(self.lance_tha)

        maior_lance_esperado = 350
        menor_lance_esperado = 200

        self.assertEqual(maior_lance_esperado, self.leilao.maior_lance )
        self.assertEqual(menor_lance_esperado, self.leilao.menor_lance)
        # Afirma que os parametros precisam ser iguais, caso contrário o teste falha  
     
    def test_deve_retornar_o_maior_e_o_menor_quando_adicionado_em_ordem_decrescente(self):
        
        self.leilao.propoe(self.lance_gu)
        self.leilao.propoe(self.lance_tha)
        
        maior_lance_esperado = self.lance_tha.valor
        menor_lance_esperado = self.lance_gu.valor
        
        self.assertEqual(maior_lance_esperado, self.leilao.maior_lance)
        self.assertEqual(menor_lance_esperado, self.leilao.menor_lance)
        
    def test_deve_retornar_o_maior_e_o_menor_valor_quando_o_leilao_tiver_tres_lances(self):
        
        a = Usuarios('Arrivabene')
        lance_a = Lance(a, 550)
        
        
        self.leilao.propoe(self.lance_gu)
        self.leilao.propoe(self.lance_tha)
        self.leilao.propoe(lance_a)
        
        maior_lance_esperado = lance_a.valor
        menor_lance_esperado = self.lance_gu.valor
        
        
        self.assertEqual(maior_lance_esperado, self.leilao.maior_lance)
        self.assertEqual(menor_lance_esperado, self.leilao.menor_lance)
        
                  
    
if __name__ == '__main__':    
    unittest.main(verbosity=2)
            
    

