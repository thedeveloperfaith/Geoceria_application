import React, { useState, useEffect } from 'react'
import "./Stores.css"
import Button from "../Components/Button"
import axios from "axios"
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'



const Stores = () => {
   

  return (
      <div className='main_Store'>
      <section className='left_Store'>
        <div className='leftTop_Store'>
            <h3>Designed by Emoyon</h3>
            <p>☆ 4.5 (100 reviews)</p>
            <div className='single_Line'>
            <div className='line_Red'></div>
            <div className='line_Black'></div>
            <div className='line_Yel'></div>
            <div className='line_Blue'></div>
            </div>
        </div>
        <div className='leftDown_Store'>
           <div className="left_Btn"> ◄ </div>
            <img src="data:image/jpeg;base64,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" alt="img" />
            <div className="right_Btn"> ► </div>
        </div>
      </section>
      <article className='right_Store'>
        <div className='rightTop_Store'>
            <h1>Test Ega Lagi</h1>
            <p>Item code: 98</p>
            <p>DESCRIPTION</p>
            <span>Test</span>
        </div>
        <div className='rightMiddle_Store'>
            <p>PRICE</p>
            <h1>$12</h1>
            <p>COLOR</p>
                     <select name="" id="color-select">
              <option value="green">GREEN</option>
              <option value="blue">BLUE</option>
              <option value="orange">ORANGE</option>
              <option value="purple">PURPLE</option>
            </select>
            {/* <input className='input_Green' type="text" placeholder="GREEN" /> */}
            <p>QUANTITY</p>
            <div className='rightMid_Cart'>
                {/* <input className='input_Num' type="text" placeholder="01"/> */}
                    <select name="" id="quantity-select">
                <option value="one">01</option>
                <option value="two">02</option>
                <option value="three">03</option>
                <option value="four">04</option>
                <option value="five">05</option>
              </select>
                <Button name="ADD TO CART" className="cart"/>
            </div>
        </div>
        <div className='rightDown_Store'>
            <h3 className='det'>DETAILS</h3>
            <h3 className='del'>DELIVERY</h3>
            <h3 className='ret'>RETURN</h3>
        </div>
      </article>
    </div>
   
  )
}

export default Stores
