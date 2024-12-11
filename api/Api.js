const BASE_URL = 'http://localhost:5001/';








export const getBooks = async () => {
  
  const response = await fetch(BOOKS_API_URL);

  if (!response.ok) 
    throw new Error
  ('Erro ao buscar dados dos livros.');

  return await response.json();
};











export const postBook = async (book) => {
  const response = await fetch(BOOKS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!response.ok) throw new Error('Erro ao adicionar livro.');
  return await response.json();
};








export const putBook = async (livroId, usuarioId) => {
  const response = await fetch(`${BOOKS_API_URL}/${livroId}/emprestar/${usuarioId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Erro ao emprestar livro.');
  }

  return;
};










export const putBook2 = async (livroId, usuarioId) => {
  const response = await fetch(`${BOOKS_API_URL}/${livroId}/devolver/${usuarioId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Erro ao emprestar livro.');
  }

  return;
};





export const seeBooks = async () => {
  
  const response = await fetch(BOOKS_API_URL);

  if (!response.ok) 
    throw new Error
  ('Erro ao buscar dados dos livros.');

  return await response.json();
};













export const deleteUnit = async (id) => {
  const response = await fetch(`${BOOKS_API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Erro ao remover unidade.');
  }
  return;
};






export const deleteBook = async (id) => {
  const response = await fetch(`${BOOKS_API_URL}/remover-livro/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Erro ao remover livro.');
  }
  return;
};













export const getUsers = async () => {
  
  const response = await fetch(USERS_API_URL);

  if (!response.ok) 
    throw new Error
  ('Erro ao buscar dados dos usuário.');

  return await response.json();
};










export const postUser = async (user) => {
  const response = await fetch(USERS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error('Erro ao adicionar usuário.');
  return await response.json();
};











export const deleteUser = async (id) => {
  const response = await fetch(`${USERS_API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erro ao remover usuário.');
};
