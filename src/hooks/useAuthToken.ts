export function removeAuthToken() {
  localStorage.removeItem('access_token');
  return 'usuario realizou o logout com sucesso';
}

export function storeAuthToken(access_token: string) {
  localStorage.setItem('access_token', access_token);
  return 'usuário realizou o login com sucesso';
}

export function getAuthToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token');
  }
}
