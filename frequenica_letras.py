from collections import Counter, defaultdict

texto1 = ''' 
Antes de começar a discutir tipos de autenticação, precisamos nos perguntar:
por que essa técnica é tão necessária em aplicações de qualquer tipo?
Vamos imaginar o seguinte cenário: é dia 23 de dezembro e devido à correria 
de fim de ano, para não enfrentar a bagunça de uma megastore, você opta por 
fazer compras no e-commerce de sua preferência. Em muitos casos, será necessário 
confirmar no site da loja que você é você mesmo, muito provavelmente informando 
seu usuário e senha. O porquê disso é bastante simples: segurança.
Todos querem se sentir seguros na utilização de algum sistema, sobretudo quando 
temos que fornecer algum dado sensível (CPF, identidade, dados bancários e assim 
por diante). Por meio dos métodos de autenticação, evitamos fraudes e o uso indevido 
de informações em ambientes digitais.
Por isso, vamos ver alguns tipos de autenticação que podemos implementar em nossos sistemas.
'''

texto2 = '''Como eu faço para aprender melhor?
Essa é certamente uma pergunta de ouro. Na Alura, nós acreditamos muito no 
poder de transformação da educação, mas aprender pode não ser uma tarefa tão 
simples quanto imaginamos.
É preciso foco, comprometimento, atenção, prática e testar os limites do nosso 
conhecimento. Estudar é um ato tão técnico quanto pescar, cozinhar e desenvolver 
códigos em JavaScript.
Nesse contexto, não é à toa que utilizamos a metáfora do mergulho de forma tão 
recorrente: aprender é uma verdadeira imersão. E, para se aprofundar nesse oceano 
com tranquilidade, é interessante aprender a aprender.
Aqui na Alura, nós temos muita sorte: se tem alguém que entende desse assunto 
é o Gui Silveira, um dos co-fundadores do Grupo e nosso Chief Education Officer!
Para te ajudar a “aprender a aprender”, nós separamos alguns dos pontos essenciais 
que ele já nos ensinou sobre o tema! Vem conhecer cada um deles lendo esse artigo!
'''

def avalia_frequancia_letras(texto):
    aparicoes = Counter(texto.lower())
    total_caractere = sum(aparicoes.values())
    proporcoes = [(letra, quantidade / total_caractere * 100) for letra, quantidade in aparicoes.items()]
    proporcoes = Counter(dict(proporcoes))
    mais_comuns = proporcoes.most_common(10)
    for caractere, frequencia in mais_comuns:
        print(f'{caractere} => {frequencia:.2f}%')
    
avalia_frequancia_letras(texto1)


    
'''Explicando o código acima

(linha 35)
Inicialmente utilizamos o "Counter" para contar a quantidade de vezes que cada caractere aparece
e retorna parecido com um dicionário - EX: 'a': 5, 'x': 8... porem não é um dicionário 

(linha 36)
Soma os valores de cada caractere

(linha 37)
Como queremos descobrir a frequência de cada caractere, é necessário "dividir a quantidade pelo total de caracteres"
Usamos 'items() por precisar de chave e valor, que foram colocados em uma tupla
tudo isso em uma "lista comprehension" para as tuplas serem criadas já dentro de uma lista para "iterarmos" nela

(linha 38)
Neste caso as tuplas ficam parecidas com dicionários, então transformamos as tuplas em dicionários
Porém, dicionários não sabem que os valores são valores literalmente, ou seja, ,que podem ser somados e etc
Por isso usamos o "Counter" novamente, por ser um contador ele sabe que os valores a direita podem ser somados

(linha 39)
Usamos "most_comuns" para mostrar os "mais comuns", ,ou seja, os caracteres que mais apareceram
passando a quantidade necessária como parámentro

(linha 40)
Uso do For desempacotando os parametros a serem mostrados dentro dos mais comuns

'''    
    

    