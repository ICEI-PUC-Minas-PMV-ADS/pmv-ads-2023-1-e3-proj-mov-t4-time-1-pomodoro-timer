const API_URL = 'https://64459cc2b80f57f581bdcc78.mockapi.io/api/v1';

const API_URL_CADASTRO = "https://pomodoro.fly.dev/usuarios/cadastro";

const API_URL_LOGIN = "https://pomodoro.fly.dev/usuarios/login";

export const cadastrarUsuario = async (nome, email, senha) => {
  const res = await fetch(API_URL_CADASTRO, {
    method: "POST",
    body: JSON.stringify({
      nome: nome,
      email: email,
      senha: senha,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
  return res.status
};

export const loginUsuario = async (email, senha) => {
  console.log(email, senha);
  const res = await fetch(API_URL_LOGIN, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
  return res.status
};

export const fetchUsuario = () => fetch(`${API_URL}/usuarios`)