import React, { useState } from 'react';
import axios from 'axios';

const logar = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await logar(username, password);
      alert(response);
    } catch (error) {
      alert('Erro ao se logar');
      console.log(error);
      console.error('Erro ao se logar:', error);
    }
  };
  return (
    <div>
      <form>
      <h1>Login SyStem</h1>
        <label>
         <span>Usuário</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span>Senha</span> 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
export default App;
