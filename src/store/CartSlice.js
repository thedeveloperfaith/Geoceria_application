import { createSlice } from "@reduxjs/toolkit";

const cartRedux =createSlice({
    name: 'cart',
    initialState:[],
        // {
        //     price:60,
        //     name: "Titi",
        //     id: 1,
        //     image:"https://media.licdn.com/dms/image/v2/D4D2DAQGRbcaUSkjvVQ/profile-treasury-image-shrink_160_160/B4DZolD0KRKIAk-/0/1761558356294?e=1777647600&v=beta&t=6uuSxUlWuICmXXZfmjRh77rZM_0viOyVZIhCj9X46Zg",
        //     description: "titi is the peron being described",
        //     quantity:1

        // }

    reducers:{

        // addToCart: (state , action) => {
        //     state.push (action.payload);
        // }

        addToCart:(state , action) => {
          const existingInCart = state.findIndex(
          item => item.id === action.payload.id
        );

        if (existingInCart === -1) {
          const newItem = { ...action.payload, quantity: 1 };
          return [...state, newItem];
        } else {
            return state.map((item, index) => {
                if (index === existingInCart) {
                    return {...item , quantity: item.quantity + 1}
                } 
                return item;
            });
        //   const updatedCart = [...state];
        //   updatedCart[existingInCart] = {
        //     ...updatedCart[existingInCart],
        //     quantity: updatedCart[existingInCart].quantity + 1
        //   };
        //   return updatedCart;
        }
    },

    increaseOne: (state, action) => {
        console.log("increased" , action.payload)
      const item = state.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseOne: (state, action) => {
      const item = state.find(
        (item) => item.id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter(
            (i) => i.id !== action.payload
          );
        }
      }
    },

    removeItem: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});



export const {addToCart,increaseOne,decreaseOne,removeItem} = cartRedux.actions;
export default cartRedux.reducer;




