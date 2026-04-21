import React, { useState, useEffect } from 'react'
import "./DetailedPage.css"
import Button from "../Components/Button"
import axios from "axios"
// import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const DetailedPage = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchProduct = async () => {
         try {
            const res = await axios.get (`https://api.escuelajs.co/api/v1/products/${id}`)
            setProduct(res.data);
            setIsLoading(false)
            console.log(isLoading)
            
        } catch (error) {
            console.log(error.message)
            
        }
    }
    useEffect(() =>{
        fetchProduct();
    }, [])


  return (
    <div className=''>
        <Header/>
        {isLoading? (<div className='loading'>Loading...</div>
        ): (
            <div className='detailed_page_section'>
      <section className='green_section'>
          <div className='paragraph_section'>
               <p>Designed by Faith<br/>
                  4.5 review
               </p>
          </div>
          <div className='box'>
               <div className='btn'> ^</div>
               <img src ={product.images?.[0]} alt={product.title}/>
               <p>item code:{ product.id}</p>
               <p>Description</p>
               <span>{product.description}</span>
               <h3>Test</h3>
          </div>
        <div className='second'>
          <p>PRICE</p>
          <span>{product.price}</span>
          <p>color</p>
          <select name="" id="color-select">
            <option value="green"> Green</option>
            <option value="blue"> Blue</option>
            <option value="orange"> orange</option>
            <option value="purple"> purple</option>
          </select>
          {/* <input className='green_input' type="text" placeholder="Green"/> */}
          <p>Quantity</p>
          <div className='third'> 
            <select name="" id="quantity-select">
              <option value="one">01 </option>
              <option value="two"> 02</option>
              <option value="three"> 03</option>
              <option value="four"> 04</option>
              <option value="five">05 </option>
            </select>
            {/* <input className='number' type="text" placeholder="01"/> */}
            <Button  onclick = {() => NavigateEvent( "/cart")} name="ADD TO CART" className="cart"/>
          </div>
        </div>
        <div className='down'>
            <p className='Details'>Details</p>
            <p className='delivery'> Delivery </p>
            <p className='return'>Return</p>
        </div>
      </section>
    </div>
            
        )}
    </div>
  )
}

export default DetailedPage
