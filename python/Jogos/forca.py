from random import choice

def cabecalho_do_jogo(msg):
    print('-'*30)
    print(f'{msg:^30}')
    print('-'*30)

# caso não seja passa nenhum parametro, abrirá palavras.txt
def escolhe_palavra_secreta(nome_arquivo='palavras.txt'):
    ## este bloco carrega a palavra secreta baseado nas palavras em um arquivo
    arquivo = open(nome_arquivo, 'r')
    palavras = []
    for linha in arquivo:
        palavras.append(linha.strip())
    arquivo.close()
    palavra_secreta = choice(palavras)
    return palavra_secreta

def inicia_palavra(palavra):
    # Adiciona '_' para cada letra da palavra
    # exemplo: 'GUSTAVO' criará '_ _ _ _ _ _ _'
    return ['_' for letra in palavra]

def pede_chute(letra_acertada):
    print(' '.join(letra_acertada))# transforma a lista em uma string
    print()
    chute = input('Digite uma letra: ').strip().upper()
    print()
    return chute

def chute_certo(palavra_secreta, chute, letra_acertada):
    for i, letra in enumerate(palavra_secreta):
        if chute == letra:
            letra_acertada[i] = letra    
 
def desenha_forca(tentativas):
    print("  _______     ")
    print(" |/      |    ")

    if(tentativas == 1):
        print(" |      (_)   ")
        print(" |            ")
        print(" |            ")
        print(" |            ")

    if(tentativas == 2):
        print(" |      (_)   ")
        print(" |       |     ")
        print(" |            ")
        print(" |            ")

    if(tentativas == 3):
        print(" |      (_)   ")
        print(" |      \|    ")
        print(" |            ")
        print(" |            ")

    if(tentativas == 4):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |            ")
        print(" |            ")

    if(tentativas == 5):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |            ")

    if(tentativas == 6):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      /     ")

    if (tentativas == 7):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      / \   ")

        print(" |            ")
        print("_|___         ")
        print()
  
def chute_errado(chute, erros):
    if chute in erros:
        print(f'Você já digitou a letra {chute}\nTente novamente!')
    else:
        erros.append(chute)
        # Conta as letras erradas dentro da lista erros
        tentativas = len(erros)
        desenha_forca(tentativas)
    print(f'Letras erradas {erros}\n') 
    # retorna os dois valores para serem usados fora da função
    return erros, tentativas
 
def mensagem_perdedor(palavra_secreta):
    print("Puxa, você foi enforcado!")
    print("A palavra era {}".format(palavra_secreta))
    print("    _______________         ")
    print("   /               \       ")
    print("  /                 \      ")
    print("//                   \/\  ")
    print("\|   XXXX     XXXX   | /   ")
    print(" |   XXXX     XXXX   |/     ")
    print(" |   XXX       XXX   |      ")
    print(" |                   |      ")
    print(" \__      XXX      __/     ")
    print("   |\     XXX     /|       ")
    print("   | |           | |        ")
    print("   | I I I I I I I |        ")
    print("   |  I I I I I I  |        ")
    print("   \_             _/       ")
    print("     \_         _/         ")
    print("       \_______/           ") 
    
def mensagem_vencedor():
    print("Parabéns, você ganhou!")
    print("       ___________      ")
    print("      '._==_==_=_.'     ")
    print("      .-\\:      /-.    ")
    print("     | (|:.     |) |    ")
    print("      '-|:.     |-'     ")
    print("        \\::.    /      ")
    print("         '::. .'        ")
    print("           ) (          ")
    print("         _.' '._        ")
    print("        '-------'       ")
    
def jogo_fc():
    cabecalho_do_jogo('Jogo da Forca')
    
    # pode receber um parametro se necessário
    palavra_secreta = escolhe_palavra_secreta()
    
    letra_acertada = inicia_palavra(palavra_secreta)
    
    acertou = False
    enforcou = False
    erros = [] #guarda as letras erradas
    
    while not acertou and not enforcou:               
        chute = pede_chute(letra_acertada)
        
        # se Letra certa, coloca a letra na posição correta
        if chute in palavra_secreta:
            chute_certo(palavra_secreta, chute, letra_acertada)
            
        # senão, coloca a letra na lista de erros e conta tentativa
        else:
            erros, tentativas = chute_errado(chute, erros)
        
        # Se tentativas chegar a 7 perdeu
        enforcou = tentativas == 7
        # Senão tiver mais '_' dentro da letra_acertada é pq a palavra foi completada
        # Ganhou
        acertou = '_' not in letra_acertada
             
    if acertou:
        mensagem_vencedor()
    else:
        mensagem_perdedor(palavra_secreta)
    
if __name__ == '__main__':
    jogo_fc()
            