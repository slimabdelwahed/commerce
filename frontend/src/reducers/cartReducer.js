const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = action.payload;
        const existItem = state.cartItems.find(x => x._id === item._id);
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map(x =>
              x._id === existItem._id ? item : x
            ),
          };
        } else {
          return { ...state, cartItems: [...state.cartItems, item] };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(x => x._id !== action.payload),
        };
      case 'UPDATE_CART_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x._id === action.payload._id
              ? { ...x, quantity: action.payload.quantity }
              : x
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;