from forca import jogo_fc
from adivinhacao import jogo_ad

print('-'*10)
print(f'{"Jogos":^10}')
print('-'*10)

print('''Escolha o jogo desejado
    [1]Adivinhação
    [2]Forca
    [3]Sair''')
print()
jogo = int(input('Digite a opção desejada: '))

while True:          
    if jogo == 1:
        jogo_ad()
    elif jogo == 2:
        jogo_fc()
    elif jogo == 3:
        break
    
    
