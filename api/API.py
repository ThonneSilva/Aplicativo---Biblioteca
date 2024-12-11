
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


    ## rota para exlcuir um livro

@app.route('/livros/<int:id>', methods=['DELETE'])
def excluir_livro(id):
    for indice, livro in enumerate(livros):
        if livro.get('id') == id:
            del livros[indice]
            return jsonify(livros)



# Emprestar livros
@app.route('/livros/alugar/<int:id_livro>', methods=['POST'])
def alugar_livro(id_livro):
    livro = next((l for l in livros if l['id'] == id_livro), None)

    # Verificar se o livro existe
    if not livro:
        return jsonify({'mensagem': 'Livro não encontrado.'}), 404

    # Verificar se o livro está disponível
    if livro['quantidade'] <= 0:
        return jsonify({'mensagem': 'Livro não disponível para empréstimo.'}), 400

    # Atualizar quantidade disponível e marcar como emprestado
    livro['quantidade'] -= 1
    livro.setdefault('Emprestado', True)  # Marcar como emprestado
    livro.setdefault('quantidadeEmprestada', 0)
    livro['quantidadeEmprestada'] += 1

    return jsonify({
        'mensagem': 'Livro emprestado com sucesso.',
        'livro': {
            'id': livro['id'],
            'titulo': livro['titulo'],
            'quantidadeDisponivel': livro['quantidade'],
            'quantidadeEmprestada': livro['quantidadeEmprestada']
        }
    }), 200










    # Verificar se o usuário já tem este livro emprestado
    if id_livro in usuario['livros_emprestados']:
        return jsonify({'mensagem': 'Usuário já tem este livro emprestado.'}), 400

    # Atualizando quantidade do livro
    livro['quantidade'] -= 1

    # Adicionando o livro ao histórico de livros emprestados do usuário
    usuario['livros_emprestados'].append(livro['id'])

    # Registrando o empréstimo
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



# Mostrar emprestados 
@app.route('/emprestimos', methods=['GET'])
def listar_todos_emprestimos():
    livros_emprestados = [
        {
            "id": livro["id"],
            "titulo": livro["titulo"],
            "autor": livro.get("autor", "Autor desconhecido"),
            "quantidadeEmprestada": livro.get("quantidadeEmprestada", 0),
            "usuariosEmprestados": livro.get("usuariosEmprestados", [])
        }
        for livro in livros if livro.get("Emprestado")
    ]

    if livros_emprestados:
        return jsonify(livros_emprestados), 200
    else:
        return jsonify({"mensagem": "Nenhum livro está emprestado atualmente."}), 200





# Rota para devolver livros
@app.route('/devolver-livro', methods=['PUT'])
def devolver_livro():
    data = request.get_json()
    usuario_id = data.get('usuario_id')
    livro_id = data.get('livro_id')

    if not usuario_id or not livro_id:
        return jsonify({'error': 'ID do usuário e do livro são obrigatórios'}), 400

    # Verificar se o empréstimo existe
    emprestimo = next((e for e in emprestimos if e['usuario_id'] == usuario_id and e['livro_id'] == livro_id), None)
    
    if emprestimo is None:
        return jsonify({'error': 'Empréstimo não encontrado'}), 404

    # Atualizar a quantidade de livros emprestados
    livro = next((l for l in livros if l['id'] == livro_id), None)
    
    if livro:
        livro['quantidadeEmprestada'] -= 1
        # Remover o empréstimo
        emprestimos.remove(emprestimo)
        return jsonify({'message': 'Livro devolvido com sucesso!'}), 200
    else:
        return jsonify({'error': 'Livro não encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)







#Rodar a API
app.run(port=5001, host='localhost', debug=True)