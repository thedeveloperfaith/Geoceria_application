import React, { useContext } from 'react'
import "./CardProducts.css"
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppProvider';

const CardProducts = ({product}) => {
  
  const  navigate = useNavigate();
  const {dispatch} =useContext(AppContext)

  return (
     <div className='Card_container'>
        <div className='CardImg'  onClick={() => navigate (`detailedpage/${product.id}`)}>
         <img src={product?.images} alt ="img" />
        </div>
        <h2>{product?.title}</h2>
        <span>${product?.price}</span>
        <button onClick={()=> dispatch({type: "ADD_TO_CART", payload: product})}>Add to Cart</button>
    </div>
  )
};

export default CardProducts
