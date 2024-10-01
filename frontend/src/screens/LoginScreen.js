import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:3000/api/User/login', { email, password });

      setMessage('Connexion réussie');
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate("/home");
    } catch (error) {
      setMessage('Erreur lors de la connexion');
    }
  };

  return (
    /*<form onSubmit={submitHandler}>
      <h1>Connexion</h1>
      {message && <p className="message">{message}</p>}
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Se connecter</button>
    </form>*/
    <div className="container mt-5">
    <form onSubmit={submitHandler} className="w-50 mx-auto">
        <h1 className="text-center mb-4">Connexion</h1>
        {message && <p className="alert alert-danger">{message}</p>}

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>

        <button type="submit" className="btn btn-primary w-100">Se connecter</button>
    </form>
</div>
  );
};

export default LoginScreen;