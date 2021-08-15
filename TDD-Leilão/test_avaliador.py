import unittest
from unittest import TestCase
from dominio import Usuarios, Lance, Leilao, Avaliador


class TestAvaliador(TestCase):

    def test_avalia_lances(self):

        gu = Usuarios('Gustavo')
        tha = Usuarios('Thais')

        lance_gu = Lance(gu, 200.00)
        lance_tha = Lance(tha, 350.00)

        leilao = Leilao('Celular')

        leilao.lances.append(lance_gu)
        leilao.lances.append(lance_tha)

        avaliador = Avaliador()
        maior, menor = avaliador.avalia_lance(leilao)

        maior_lance_esperado = 350.00
        menor_lance_esperado = 200.00

        self.assertAlmostEqual(maior_lance_esperado, maior)
        self.assertAlmostEqual(menor_lance_esperado, menor)
        # Afirma que os parametros precisam ser iguais, caso contrário o teste falha

unittest.main(verbosity=2)
