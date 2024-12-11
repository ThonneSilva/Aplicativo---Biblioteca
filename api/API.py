
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)



livros = [
    {
        'id': 1,
        'titulo': 'Dom Casmurro',
        'autor': 'Machado de Assis',
        'ano': '1899',
        'quantidade': 2,
    },

    {
        'id': 2,
        'titulo': 'Memorias Postumas de Bras Cubas',
        'autor': 'Machado de Assis',
        'ano': '1881',
        'quantidade': 3,

    },

    {
        'id': 3,
        'titulo': 'Grande Sertao: Veredas',
        'autor': 'João Guimaes Rosa',
        'ano': '1956',
        'quantidade': 4,

    },
    {
        'id': 5,
        'titulo': 'O Cortiço',
        'autor': 'Aluísio Azevedo',
        'ano': '1890',
        'quantidade': 4,

    },

    {
        'id': 6,
        'titulo': 'Iracema',
        'autor': 'José de Alencar',
        'ano': '1865',
        'quantidade': 1,

    },

    {
        'id': 7,
        'titulo': 'Iracema',
        'autor': 'José de Alencar',
        'ano': '1865',
        'quantidade': 1,

    },

    {
        'id': 8,
        'titulo': 'Macunaíma',
        'autor': 'Mário de Andrade',
        'ano': '1928',
        'quantidade': 11,

    },

    {
        'id': 9,
        'titulo': 'Capitães da Areia',
        'autor': 'Jorge Amado',
        'ano': '1937',
        'quantidade': 2,

    },

    {
        'id': 10,
        'titulo': 'Vidas Secas',
        'autor': 'Graciliano Ramos',
        'ano': '1938',
        'quantidade': 9,

    },

     {
        'id': 11,
        'titulo': 'A Moreninha',
        'autor': 'Joaquim Manuel de Macedo',
        'ano': '1844',
        'quantidade': 2,

    },

     {
        'id': 12,
        'titulo': 'O Tempo e o Vento',
        'autor': 'Erico Verissimo',
        'ano': '1949',
        'quantidade': 1,

    },

    {
        'id': 13,
        'titulo': 'A Hora da Estrela',
        'autor': 'Clarice Lispector',
        'ano': '1977',
        'quantidade': 1,

    },
    {
        'id': 14,
        'titulo': 'O Quinze',
        'autor': ' Rachel de Queiroz',
        'ano': '1930',
        'quantidade': 1,

    },
     {
        'id': 15,
        'titulo': 'Menino do Engenho',
        'autor': 'José Lins do Rego',
        'ano': '1932',
        'quantidade': 5,

    },

    {
        'id': 16,
        'titulo': 'Sagarana',
        'autor': 'João Guimarães Rosa',
        'ano': '1946',
        'quantidade': 3,

    },
    {
        'id': 17,
        'titulo': 'Fogo Morto',
        'autor': 'José Lins do Rego',
        'ano': '1943',
        'quantidade': 1,

    },

]

#Rota mostrar a lista de livros cadastrados
@app.route('/livros', methods=['GET'])
def obter_livros():
    return jsonify(livros)



# Rota para buscar o livro por ID
@app.route('/livros/<int:id>', methods=['GET'])
def consultar_livro_por_id(id):
    for livro in livros:
        if livro.get('id') == id:
            return jsonify(livro)



# Rota editar um livro na API
@app.route('/livros/<int:id>', methods=['PUT'])
def editar_livro_no_id(id):
    livro_alterado = request.get_json()
    for indice, livro in enumerate(livros):
        if livro.get('id') == id:
            livros[indice].update(livro_alterado)
            return jsonify(livros[indice])


# Rota para adicionar um novo livro
@app.route('/adicionar-livro', methods=['POST'])
def incluir_livro():
    novo_livro = request.get_json()
    livros.append(novo_livro)
    return jsonify(novo_livro), 201

if __name__ == '__main__':
    app.run(debug=True, port=5001)

@app.route('/livros/<int:id>', methods=['DELETE'])
def excluir_livro(id):
    for indice, livro in enumerate(livros):
        if livro.get('id') == id:
            del livros[indice]
            return jsonify(livros)



# Rota para alugar um livro associado a um usuário
@app.route('/livros/alugar/<int:id_livro>/usuario/<int:id_usuario>', methods=['POST'])
def alugar_livro_para_usuario(id_livro, id_usuario):
    livro = next((l for l in livros if l['id'] == id_livro), None)
    usuario = next((u for u in usuarios if u['id'] == id_usuario), None)

    if not livro:
        return jsonify({'mensagem': 'Livro não encontrado.'}), 404
    if not usuario:
        return jsonify({'mensagem': 'Usuário não encontrado.'}), 404
    if livro['quantidade'] <= 0:
        return jsonify({'mensagem': 'Livro não disponível para aluguel.'}), 400

    livro['quantidade'] -= 1
    usuario['livros_emprestados'].append(livro['id'])
    emprestimos.append({'usuario_id': id_usuario, 'livro_id': id_livro})

    return jsonify({
        'mensagem': f'Livro "{livro["titulo"]}" alugado com sucesso para {usuario["nome"]}.',
        'livro': livro,
        'usuario': usuario
    })

# Rota para listar usuários
@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    return jsonify(usuarios)

# Rota para adicionar um usuário
@app.route('/usuarios', methods=['POST'])
def adicionar_usuario():
    novo_usuario = request.get_json()
    usuarios.append(novo_usuario)
    return jsonify(novo_usuario)

# Rota para listar empréstimos
@app.route('/emprestimos', methods=['GET'])
def listar_emprestimos():
    return jsonify(emprestimos)




#Rodar a API
app.run(port=5001, host='localhost', debug=True)