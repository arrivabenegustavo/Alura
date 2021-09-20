#  USANDO (COPY() / [:]) E EXTEND()
# usuarios_data_science = [15, 23, 43, 56]
# usuarios_machine_learning = [13, 23, 56, 42]

# testando = usuarios_data_science[:]
# testando.extend(usuarios_machine_learning)
# print(testando)


# TESTES COM SET
# usuarios_data_science = {15, 23, 43, 56}
# usuarios_machine_learning = {13, 23, 56, 42}

# # Mantem o somente os que estão nos dois conjuntos.
# testes = usuarios_data_science & usuarios_machine_learning

# Exclui os que estão nos dois conjuntos (^ ou exclusivo) mantendo apenas valores unicos.
# testes = usuarios_data_science ^ usuarios_machine_learning

# Exclui as repetições mantendo apenas um deles.
# testes = usuarios_data_science | usuarios_machine_learning

# Manten os exclusivos da variavel à esquerda, ,ou seja, exclui repetidos
# testes = usuarios_data_science - usuarios_machine_learning
# print(testes)


