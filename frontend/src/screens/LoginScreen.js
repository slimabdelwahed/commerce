import React, { useState } from 'react';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/login', { email, password });

      setMessage('Connexion réussie');
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      setMessage('Erreur lors de la connexion');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Connexion</h1>
      {message && <p>{message}</p>}
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginScreen;