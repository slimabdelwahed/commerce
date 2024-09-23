import React, { useState } from 'react';
import axios from 'axios';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const { data } = await axios.post('/api/users', {
        name,
        email,
        password
      });

      setMessage('Inscription réussie');
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      setMessage('Erreur lors de l\'inscription');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Inscription</h1>
      {message && <p>{message}</p>}
      <div>
        <label>Nom</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Confirmer mot de passe</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegisterScreen;