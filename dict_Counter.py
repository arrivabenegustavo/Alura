from collections import Counter, defaultdict

texto = 'Eu gosto do Sao Paulo e gosto de Futebol e gosto de hamburguer'
 
# COUNTER faz contagem das palavras mas não é iterável  
# texto = texto.lower().split()
# conta_aparicoes = Counter(texto)
# print(type(conta_aparicoes))
# print(conta_aparicoes)


# Outro exemplo usando GET(X, (SENÃO))
# aparicoes = {}
# for palavra in texto.split():
#     pega_palavra = aparicoes.get(palavra, 0)
#     aparicoes[palavra] = pega_palavra + 1
# print(aparicoes)


# Caso o item não seja encontrado o DEFAULTDICT devolve o que ele está chamando
# aparicoes = defaultdict(int)
# texto = texto.lower().split()
# for palavra in texto:
#     aparicoes[palavra] += 1
# print(aparicoes)

