from random import randint

def jogo_ad():
    print('-'*30)
    print(f'{"Jogo da Adivinhação":^30}')
    print('-'*30)

    numero_secreto = randint(1,10)
    tentativas = 3
    rodada = 1

    while rodada <= tentativas:
        print(f'Rodada {rodada} de {tentativas}')
        chute = int(input('Digite um numero: '))
        if chute == numero_secreto:
            print('Você Acertou!')
            break
        elif chute > numero_secreto:
            print('Palpite maior!')
        else:
            print('Palpite menor')
        
        rodada += 1

if __name__ == '__main__':
    jogo_ad()

