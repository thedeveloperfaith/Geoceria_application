import React, { useContext } from 'react';
import './Header.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { AppContext } from '../Context/AppProvider.jsx';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(AppContext);
  return (
    <header className='main_Header'>
      <section className='sub_Header'>
        <article className='left_Header'>
            <h1>Faith</h1>
        </article>
        <div className='middle_Header'>
            <div className='middle_Buttons'>
              <Button onClick={() => navigate("/")} name="Home" className="home"/>
               <Button onClick={() => navigate("/stores")} name="Stores" className="store"/>
            </div>
            <div className='middle_Input'>
                <input type="text" placeholder='Search for food items' className='food' />
               <Button onclick={() => navigate ("/")}name="Search" className="search"/>
            </div>
        </div>
        <div className='right_Header'>
          <div onClick={() => navigate("/cart")}>
            <BsCart2 size={40} color='green' cursor="pointer"/>
            <span className='cart_Number'>{cart.length}</span>
          </div>
            <Button onclick={() => navigate ("/register")} name="Register" className="register"/>
            <Button onclick={() => navigate ("/signUp")} name="Login" className="login"/>
        </div>
      </section>
    </header>
  )
}

export default Header
