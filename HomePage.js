import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.menu}>
        <Text style={styles.title}>📚 Biblioteca - Érico Veríssimo</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('VerLivros')}
        >
          <Text style={styles.buttonText}>📖 Ver livros</Text>
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

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('RemoverLivro')}
        >
          <Text style={styles.buttonText}>❌ Remover livro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Usuarios')}
        >
          <Text style={styles.buttonText}>👥 Usuários</Text>
        </TouchableOpacity>
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
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    height: 'auto',
    paddingBottom: 100,
  },
  bookItem: {
    backgroundColor: '#2F2F2F',
    padding: 12,
    marginVertical: 8,
    borderRadius: 4,
  },
  bookButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
    textAlign: 'center',
  },
  detalhes: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#1C1C1C',
    borderRadius: 4,
  },
  bookText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  bookText2: {
    fontSize: 16,
    color: '#E0E0E0',
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
  blackButton: {
    backgroundColor: 'black', // Fundo preto
    paddingVertical: 14,  // Mais espaçamento vertical
    paddingHorizontal: 20,  // Mais espaçamento horizontal
    borderRadius: 25,  // Bordas mais arredondadas
    alignItems: 'center',
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
