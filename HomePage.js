import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.menu}>
        <Text style={styles.title}>📚 Sistema - Biblioteca Érico Veríssimo</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('VerLivros')}
        >
          <Text style={styles.buttonText}>📖 Livros Disponiveis</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('AdicionarLivro')}
        >
          <Text style={styles.buttonText}>➕ Adicionar livro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('EmprestarLivro')}
        >
          <Text style={styles.buttonText}>🤝 Emprestar livro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('DevolverLivro')}
        >
          <Text style={styles.buttonText}>🔄 Devolver livro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Emprestados')}
        >
          <Text style={styles.buttonText}>📦 Ver emprestados</Text>
        </TouchableOpacity>

        {/* Removido o botão "Remover livro" */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  homepage: {
    height: 650,
    backgroundColor: 'white',
    padding: 30,
  },

  title: {
    color: 'black',  // Altere a cor para preto para garantir visibilidade
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  buttonContainer: {
    width: '100%',
    padding: 16,
  },

  button: {
    backgroundColor: 'black',  // Fundo preto
    padding: 14,
    borderRadius: 20,  // Bordas mais arredondadas
    alignItems: 'center',
    marginBottom: 20,  // Espaço maior entre os botões
    shadowColor: '#000', // Sombras para profundidade
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  buttonText: {
    color: 'white', // Texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
});
