/*import React, { useState } from 'react';
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
      console.log("Tentative de connexion..."); // Log avant la requête
      const { data } = await axios.post('http://localhost:3000/api/Users/login', { email, password });

      setMessage('Connexion réussie');
      console.log('123');
      
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate("/profile");
    } catch (error) {
      console.error('Erreur de connexion:', error.response ? error.response.data : error.message);
      setMessage('Erreur lors de la connexion');
    }
  };

  return (
    
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

export default LoginScreen;*/
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        try {
            console.log("Tentative de connexion...");
            const { data } = await axios.post('http://localhost:3000/api/Users/login', { email, password });

            localStorage.setItem('userInfo', JSON.stringify(data));
            setMessage('Connexion réussie');
            navigate("/profile");
        } catch (error) {
            console.error('Erreur de connexion:', error);
            const errorMessage = error.response && error.response.data.message
                ? error.response.data.message
                : 'Erreur lors de la connexion';
            setMessage(errorMessage); // Set the error message from the server
        } finally {
            setLoading(false); // Stop loading
        }
    };*/
    import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);  // <-- Define loading here
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);  // <-- Set loading to true before the API call
      const { data } = await axios.post('http://localhost:3000/api/Users/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMessage('Connexion réussie');
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);  // <-- Set loading to false after the API call
      navigate('/profile');
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Erreur lors de la connexion";
      console.error('Erreur lors de la connexion:', error.response || error);
      setMessage(errorMsg);
      setLoading(false);  // <-- Set loading to false in case of error
    }
  };
return (
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

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Chargement...' : 'Se connecter'}
                </button>
            </form>
        </div>
    );
};

export default LoginScreen;