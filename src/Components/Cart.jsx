import React from 'react'
import "./Cart.css"
import image from "../assets/asset 6 1.png"

const Cart = () => {
  return (
    <div className='add_to_cart'>
     <section className='not_close_to_the_edge'>
        <div className='cart_container'>
            <div className='header_and_list'> 
                <div className='header_cart'>
                    <h2> Your Cart(1 item)</h2>
                </div>
                <section className='header_paragraph'>
                     <p>Product</p>
                     <p>Unit Price</p>
                     <p>Total</p>
                     <p>Remove</p>
               </section>
           </div>
       
            <div className='card_box'>
                <div className='card_content'>
                    <div className='yam_picture_image' >
                        <img src ={image} alt ="img"  />
                    </div>
                 
                    <div className='yam_value'>
                       <h3>Yam-Grade B</h3>
                       <span>500kg</span>
                    </div>
                </div>

                <div className='quantity_section'>
                    <div className='qty'>
                        <p>Quantity </p>
                    </div>

                    <div className='Quantity_number'>
                       <div className='minus'>-</div>
                       <span className='number'>1</span>
                       <div className='plus'>+</div>
                    </div>

                    <div className='button_section'>
                      <button className='more_items'>Add more items</button>
                    </div>
                </div>

                <div className='price_section'>
                    <p>#900:00</p>
                    <p>#900:00</p>
                    <button className='Remove'>Remove</button>
                </div>

                <div>
                     <p>#900:00</p>
                     <p>#900:00</p>
                     <button className='Remove'>Remove</button>
                </div>

            </div>
            
        </div>
     </section>
    </div>
  )
}

export default Cart
