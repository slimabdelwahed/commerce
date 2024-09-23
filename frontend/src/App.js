import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Importer le store
import HomeScreen from './screens/HomeScreen'; // HomeScreen à créer
import CartScreen from './screens/CartScreen'; // CartScreen à créer
import LoginScreen from './screens/LoginScreen'; // LoginScreen à créer
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
