import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import  userReducer  from './reducers/userReducers' ;
import productReducer from './reducers/productReducers';
import cartReducer from './reducers/cartReducer';

// Combinaison de tous les reducers
const rootReducer = combineReducers({
  user: userReducer,
  productList: productReducer,
  cart: cartReducer,
});

// Charger l'état du panier depuis localStorage (facultatif)
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// Charger l'information de l'utilisateur connecté depuis localStorage
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// État initial de l'application
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  user: { userInfo: userInfoFromStorage },
};

// Configuration de middleware avec thunk
const middleware = [thunk];

// Création du store avec les reducers, l'état initial et les outils de développement Redux
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;