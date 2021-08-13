import unittest
from unittest import TestCase
from dominio import Usuarios, Lance, Leilao, Avaliador

class TestAvaliador(TestCase):
    
    def test_avalia(self):
    
        gu = Usuarios('Gustavo')
        tha = Usuarios('Thais')
        
        lance_gu = Lance(gu, 200.00)
        lance_tha = Lance(tha, 350.00)
        
        leilao = Leilao('Celular')
        
        leilao.lances.append(lance_gu)
        leilao.lances.append(lance_tha)
            
        avaliador = Avaliador()
        avaliador.avalia_lance(leilao)
        
        maior_lance_esperado = 350
        menor_lance_esperado = 200
        
        self.assertAlmostEqual(maior_lance_esperado, avaliador.maior_lance)
        self.assertAlmostEqual(menor_lance_esperado, avaliador.menor_lance)
        
    if ( __name__ == '__main__'):
        unittest.main()