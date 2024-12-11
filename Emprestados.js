import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BASE_URL = 'http://localhost:5001/emprestimos';  // URL para pegar todos os empréstimos

export default function LivrosEmprestados() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado para controle de carregamento
  const [error, setError] = useState(null);  // Estado para controle de erros
  const navigation = useNavigation();

  // Buscar livros emprestados
  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch(BASE_URL);  // Requisição para obter todos os empréstimos
        const books = await response.json();

        if (response.ok) {
          // Se a resposta for válida, verificar se a lista não está vazia
          if (Array.isArray(books) && books.length > 0) {
            setBorrowedBooks(books);
          } else {
            setError("Não há livros emprestados no momento.");
          }
        } else {
          setError(books.mensagem || "Erro desconhecido ao carregar os livros.");
        }
      } catch (error) {
        console.error('Erro ao buscar livros emprestados:', error);
        setError('Erro ao carregar os livros emprestados');
      } finally {
        setLoading(false);  // Atualiza o estado de carregamento
      }
    };

    fetchBorrowedBooks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livros Emprestados</Text>

      {loading ? (
        <ActivityIndicator size="large" color="green" />  // Indicador de carregamento enquanto busca
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>  // Exibe mensagem de erro, se houver
      ) : (
        <ScrollView style={styles.bookList}>
          {borrowedBooks.length > 0 ? (
            borrowedBooks.map((book) => (
              <View key={book.id} style={styles.bookItem}>
                <Text style={styles.bookText}>Título: {book.titulo}</Text>
                <Text style={styles.bookText}>Autor: {book.autor}</Text>
                <Text style={styles.bookText}>
                  Quantidade Emprestada: {book.quantidadeEmprestada || '0'}
                </Text>
                {/* Remova o campo de usuários emprestados se não houver */}
                {/* <Text style={styles.bookText}>
                  Emprestado para: {book.usuariosEmprestados?.length > 0 ? book.usuariosEmprestados.join(', ') : 'Nenhum usuário'}
                </Text> */}
              </View>
            ))
          ) : (
            <Text style={styles.bookText}>Não há livros emprestados no momento.</Text>
          )}
        </ScrollView>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  bookList: {
    marginVertical: 20,
  },
  bookItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: 'darkgreen',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
