/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [id, setId] = useState('');
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

        const { data } = await axios.post('http://localhost:3000/api/Users/profile', config); 
        setUserInfo(data);
        setId(data._id);
        setName(data.name);
        setEmail(data.email);
        navigate('/home');
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
      navigate('/home'); 
    } catch (error) {
      setMessage('Erreur lors de la mise à jour du profil');
    }
  };*/
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  
  const ProfileScreen = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Pour le nouveau mot de passe
    const [confirmPassword, setConfirmPassword] = useState(''); // Pour la confirmation du mot de passe
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const userInfo = JSON.parse(localStorage.getItem('userInfo'));
          console.log(userInfo);
          
          if (!userInfo) {
            navigate('/home');  
            return;
          }
          const token = userInfo.token;
          const config = {
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          };
  
          const { data } = await axios.get('http://localhost:3000/api/users/profile/'+userInfo.userData.email, config); 
          setUserInfo(data);
          setId(data._id);
          setName(data.name);
          setEmail(data.email);
        } catch (error) {
          setMessage('Erreur lors du chargement du profil');
          console.error(error);
        }
      };
  
      fetchProfile();
    }, [navigate]);
  
    const updateHandler = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setMessage("Les mots de passe ne correspondent pas");
        return;
      }
      try {
        const token = JSON.parse(localStorage.getItem('userInfo')).token;
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const { data } = await axios.put('http://localhost:3000/api/users/profile/'+userInfo.userData.email, 
          { id, name, email, password }, config);
          localStorage.setItem('userInfo',{...userInfo,userData:{...userInfo.userData,email:email,password:password,name:name}})
        setMessage('Profil mis à jour avec succès');
        setUserInfo(data);
      } catch (error) {
        setMessage('Erreur lors de la mise à jour du profil');
        console.error(error);
      }
    };
  
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">Profil utilisateur</h1>
            {message && <p className="text-danger text-center">{message}</p>}
            {userInfo && (
              <form onSubmit={updateHandler}>
                <div className="mb-3">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nouveau Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirmer le Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Mettre à jour
                </button>
              </form>
              
            )}
            <br></br>
            <button onClick={()=>{window.location.href='http://localhost:3001/home'}} className="btn btn-primary w-100">
              Nos Produits
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileScreen;