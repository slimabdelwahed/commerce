import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; 
import HomeScreen from './screens/HomeScreen'; 
import CartScreen from './screens/CartScreen'; 
import LoginScreen from './screens/LoginScreen';
import OrderPaymentScreen from './screens/OrderPaymentScreen'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CreateOrderScreen from './screens/CreateOrderScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/payment" element={<OrderPaymentScreen />} />
            <Route path="/" element={<RegisterScreen />} exact />
            <Route path="/profil" element={<ProfileScreen />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
