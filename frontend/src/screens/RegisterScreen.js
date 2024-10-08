/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const { data } = await axios.post('/api/Users', {
        name,
        email,
        password
      });

      setMessage('Inscription réussie');
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate("/profil");
    } catch (error) {
      setMessage('Erreur lors de l\'inscription');
    }
  };

  return ( 
    <div className="container mt-5">
    <div className="card">
      <div className="card-body">
        <h1 className="card-title text-center">Inscription</h1>
        {message && <p className="text-danger text-center">{message}</p>}
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmer mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default RegisterScreen;*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }
    console.log("Valeurs avant la requête :", { name, email, password, confirmPassword });
    try {
      console.log("Tentative d'inscription");
      const { data } = await axios.post('http://localhost:3000/api/Users/signup', {
        name,
        email,
        password
      },{ 
        headers: {
          'Content-Type': 'application/json',
        },
    });
      setMessage('Inscription réussie');
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/login');
    } catch (error) {
      // Improved error handling
      const errorMsg = error.response?.data?.message || "Erreur lors de l'inscription";
      console.error(' error:', error);
      setMessage(errorMsg);
    }
  };
return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">Inscription</h1>
          {message && <p className="text-danger text-center">{message}</p>}
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmer mot de passe</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              S'inscrire
            </button>
          </form>
          <br></br>
          <button onClick={()=>{window.location.href='http://localhost:3001/login'}} className="btn btn-primary w-100">
              Login
            </button>
        </div>
      </div>
    </div>
  );
};


export default RegisterScreen;