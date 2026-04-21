import React, { createContext, useReducer } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

  const initialValue = [];

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const existingInCart = state.findIndex(
          item => item.id === action.payload.id
        );

        if (existingInCart === -1) {
          const newItem = { ...action.payload, quantity: 1 };
          return [...state, newItem];
        } else {
          const updatedCart = [...state];
          updatedCart[existingInCart] = {
            ...updatedCart[existingInCart],
            quantity: updatedCart[existingInCart].quantity + 1
          };
          return updatedCart;
        }
      }

      case "REMOVE_FROM_CART":
        return state.filter(item => item.id !== action.payload);

      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, initialValue);

  return (
    <AppContext.Provider value={{ cart, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider