from dominio import Usuarios, Lance, Leilao, Avaliador

gu = Usuarios('Gustavo')
tha = Usuarios('Thais')

lance_tha = Lance(tha, 400.00)
lance_gu = Lance(gu, 115.00)


leilao = Leilao('Celular')
leilao.lances.append(lance_gu)
leilao.lances.append(lance_tha)

for lance in leilao.lances:
    print(f'O usuário {lance.usuario.nome} de um lance de {lance.valor}')
    
avaliador = Avaliador()
maior, menor = avaliador.avalia_lance(leilao)
print(f'MAior lance {maior}, Menor lance {menor}')





