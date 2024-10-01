import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('userInfo')).token;
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };

        const { data } = await axios.get('/api/Users/profile', config);
        setUserInfo(data);
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        setMessage('Erreur lors du chargement du profil');
      }
    };

    fetchProfile();
  }, []);

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('userInfo')).token;
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const { data } = await axios.put('/api/Users/profile', { name, email }, config);
      setMessage('Profil mis à jour avec succès');
      setUserInfo(data);
      navigate('/login'); 
    } catch (error) {
      setMessage('Erreur lors de la mise à jour du profil');
    }
  };

  return (
    <div>
      <h1>Profil utilisateur</h1>
      {message && <p>{message}</p>}
      {userInfo && (
        <form onSubmit={updateHandler}>
          <div>
            <label>Nom</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">Mettre à jour</button>
        </form>
      )}
    </div>
  );
};

export default ProfileScreen;