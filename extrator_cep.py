endereco = 'Rua São Jorge 652, Pestana, Osasco, SP, 06180-080'
padrao = '[0-9]{5}[-]?[0-9]{3}'

import re # Regular Expression -- convencionalmente chamado de RegEx

'''[abc] - {repetição} - "?"Pode ou não conter algo, que tbm pode ser representado {0,1}
    [] pode conter apenas um dos caracteres
    () precisa ter exatamente o que estiver dentro'''

procura = re.search(padrao, endereco)
print(procura.group())

# Padrão de um CEP 5 dígitos + hífen(opcional) + 3 dígitos

# padrao = re.compile('[0-9]{5}[-]?[0-9]{3}') # precisa ser passado como string
# busca = padrao.search(endereco) # Busca o padrão dentro de um string
# if busca: # Se verdadeiro, ou seja, se encontrou!
#     cep = busca.group()
#     print(cep)
# else:
#     print('Padrão não encontrado')

        





    
    