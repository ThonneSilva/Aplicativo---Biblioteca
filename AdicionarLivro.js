import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AdicionarLivros() {
  const navigation = useNavigation();

  // Estados para os campos do formulário
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [quantidade, setQuantidade] = useState('');

  // Função para adicionar livro (simulação de envio para o servidor)
  const adicionarLivro = async () => {
    try {
      console.log('Enviando dados para o servidor...');
      const response = await fetch('http://localhost:5001/adicionar-livro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo,
          autor,
          ano,
          quantidade,
        }),
      });

      // Verifica se a resposta foi bem-sucedida
      if (response.ok) {
        const responseData = await response.json(); // Supondo que a resposta seja JSON
        console.log('Livro adicionado com sucesso:', responseData);
        alert('Livro adicionado com sucesso!');
        setTitulo('');
        setAutor('');
        setAno('');
        setQuantidade('');
        // Redireciona de volta para a tela de livros
        navigation.navigate('VerLivros');
      } else {
        const errorData = await response.json();
        console.error('Erro na resposta do servidor:', errorData);
        alert('Erro ao adicionar livro. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
      alert('Erro ao adicionar livro. Verifique sua conexão ou tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>ADICIONAR LIVRO</Text>

      {/* ScrollView para garantir rolagem do conteúdo */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Título do livro"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor do livro"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.input}
            placeholder="Ano de publicação"
            value={ano}
            onChangeText={setAno}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Quantidade disponível"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />

          {/* Botão para adicionar o livro */}
          <View style={styles.button}>
            <Button
              title="ADICIONAR LIVRO"
              color="darkgreen"
              onPress={adicionarLivro}
            />
          </View>
        </View>
      </ScrollView>

      {/* Botão de voltar */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="VOLTAR"
            color="darkgreen"
            onPress={() => navigation.navigate('HomePage')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white', // Fundo branco para a tela
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF', // Branco para o texto do título
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1, // Garante que o conteúdo ocupe o espaço disponível
    width: '100%',
    paddingBottom: 100, // Adiciona um padding inferior para garantir espaço para os botões
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#2F2F2F', // Cor de fundo cinza escuro para os campos de entrada
    color: '#E0E0E0', // Cor do texto dos campos
    marginBottom: 12,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    padding: 16,
  },
  button: {
    backgroundColor: '#E0E0E0', // Cinza muito claro para os botões
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
});
