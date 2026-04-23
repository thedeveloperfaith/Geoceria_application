import React, { createContext, useReducer , useEffect } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

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
      case "REMOVE_FROM_CART": {
        return state.filter(item => item.id !== action.payload);
      }
      case "ADD_QUANTITY": {
        return state.map((item) => {
          return item.id === action.payload ? 
          {...item, quantity: item.quantity + 1} : item;
        });
      }
      case "REMOVE_QUANTITY": {
        return state.map((item) => {
          return item.id === action.payload ?
          {...item, quantity: item.quantity > 1 ? item.quantity -1 : item.quantity} : item;
        })
        // .filter((item) => item.quantity > 0);
      }
      default:
        return state;
    }
  };

   let initialValue = [];
  const itemsInCart = localStorage.getItem("cart");

  if (itemsInCart) {
    try {
      initialValue= JSON.parse(itemsInCart);
      console.log("Cart Loaded", initialValue)
    } catch (error) {
      initialValue =[];
      console.log( "No Cart Data",error)
    }
  }
  const [cart, dispatch] = useReducer(cartReducer, initialValue);

  useEffect (() =>{
    localStorage.setItem("cart" , JSON.stringify(cart));
  },[cart]);

  console.log("cart from storage:" , itemsInCart)

  return (
    <AppContext.Provider value={{ cart, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider