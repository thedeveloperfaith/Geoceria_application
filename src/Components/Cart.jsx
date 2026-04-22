import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import Button from "../Components/Button";
import "./Cart.css"
import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const nav =useNavigate();
    const {cart, dispatch} = useContext(AppContext)

    const subTotalAmount = cart.reduce((acc , curr) => {
        return acc + curr.price * curr.quantity ;
    }, 0);

    return (
    <div className="wrapper">
      <main className="mainCard">
        <section className="menuLeft">
          <header className="mainHead">
            <h2>Your Cart ({cart.length} {cart.length <= 1?"item" : "items"})</h2>
            <ul className="cartWrap">
              <li>Product</li>
              <li>Unit Price</li>
              <li>Total</li>
              <li>Remove</li>
            </ul>
          </header>
          <div className="full_Cart">
            {cart.length === 0?(
                <h2>Your cart is empty</h2>
            ) :( 
                cart.map((item) => (
                    <div className="all_Item" key={item.id}>
          <article className="cartFormat">


            <div className="imgWrap">
            <img src={item.images?.[0]} alt={item.title} />
              <section className="textWrap">
                <p>{item.title}</p>
                <span>{item.quantity}</span>
              </section>
            </div>
            <p className="para">Quantity</p>
            <section className="quantityWrap">
              <div className="top" >
                <FiPlus className="edit" onClick={() => dispatch ({type:  "ADD_QUANTITY", payload: item.id})} />
                <span className="edit">{item.quantity}</span>
                <FiMinus className="edit" onClick={() => dispatch ({type: "REMOVE_QUANTITY", payload: item.id})}/>
              </div>
              <nav className="side">
                <span>
                  <h3># {item.price}</h3>
                </span>
                <span>
                 <h3># {item.price * item.quantity}</h3>
                </span>
                <Button className="wrap" name="Remove" onClick={() => dispatch ({type:  "REMOVE_QUANTITY", payload: item.id})}/>
              </nav>
            </section>
            <div className="btnWrap">
              <Button className="btnAdd" name="Add more items" />
              <Button className="btnRemove" name="Remove" onClick= {() => dispatch({type: "REMOVE_FROM_CART", payload: item.id})} />
            </div>
          </article>
          </div>
          ))
          )}
         </div>
        </section>
        <aside className="menuRight">
          <div className="centerEdit">
            <section className="top">
              <div className="wrappers">
                <p>Subtotal:</p>
                <p># {subTotalAmount.toFixed(2)}</p>
              </div>
              <div className="wrap">
                <span>{cart.length} item(s)</span>
              </div>
              <aside className="bottom">
                <input type="checkbox" />
                <p>
                  i have read the instruction above and i agree to{" "}
                  <span>Groceria's Return Policy</span>{" "}
                </p>
              </aside>
            </section>
            <Button  onClick={() =>nav ("/checkout")} className="checkout_page" name="Proceed to checkout" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Cart;