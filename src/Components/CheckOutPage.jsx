import React from 'react'
import "./CheckOutPage.css"

const CheckOutPage = () => {
  return (
    <>
      <div className='checkoutpage_container'>
        <div className='checkoutpage_container_notclosetoedge'>
          <div className='checkoutpage_container_all_sections'>
            <header className='checkoutpage_all_sections_header'>
              <h5>Back To Cart</h5>
              <h2>Checkout</h2>
            </header>

            <div className='checkoutpage_all_sections_body'>
              <article className='checkoutpage_all_sections_body_right'>
                <div className='body_right_notclosetotheedge'>
                  <section className='contact_info'>
                    <button className='btn1'>1</button> 
                    <h4>Contact Infornation</h4>
                  </section>
                  <main className='contact_form'>
                    <div className='input_group'>
                      <p>First Name*</p>
                      <input type="text"  placeholder="Faith" />

                       <p>Email Address*</p>
                      <input type="text"  placeholder="faith@example.com"/>
                    </div>

                    <div className='input_group'>
                      <p>Last Name*</p>
                      <input type="text"  placeholder=" Titi"/>

                       <p>Phone Number*</p>
                      <input type="number"  placeholder="0000000000000"/>
                    </div>
                  </main>

                  <section className='shipping_address'>
                    <button className='btn2'>2</button> 
                    <h4>Shipping Address</h4>
                  </section>
                  <main className='shipping_form'>
                    <div className='input_group'>
                      <p>Street Address*</p>
                      <input type="text"  placeholder="123 Main Street" />
                    </div>
                    <div className='input_row'>
                      <div className='input_group'>
                        <p>City*</p>
                        <input type="text"  placeholder="Lagos"/>
                      </div>
                      <div className='input_group'>
                        <p>State*</p>
                        <input type="number"  placeholder="lagos"/>
                      </div>
                    </div>

                    <div className='input_group'>
                      <p>ZIP code*</p>
                      <input type="text"  placeholder="1000001" className='zip_input'/>
                    </div>
                  </main>
                   

                  <section className='payment_method'>
                    <button className='btn3'>3</button> 
                    <h4>Payment Method</h4>
                  </section>

                  <div className='payment_button'>
                    <button className='swipe'>Credit card</button>
                    <button> Bank transfer</button>
                  </div>

                      <div className='input_group'>
                        <p>Card number</p>
                        <input type="number"  placeholder="1234 5678 9012 3456"/>
                      </div>
                      <div className='input_group'>
                        <p>Name on card</p>
                        <input type="text"  placeholder="Faith titi"/>
                      </div>

                      <div className='input_row'>
                        <div className='input_group'>
                          <p>Expiry date</p>
                          <input type="text"  placeholder="faithtiti@gmail.com"/>
                        </div>
                        <div className='input_group'>
                          <p>CVV</p>
                          <input type="number"  placeholder="............."/>
                        </div>
                      </div>
                    <button className='place_order'>
                      Place order
                    </button>
                </div>
              </article>

              <aside className='checkoutpage_all_sections_body_left'>
                <div className="order_summary">
                    <h3>
                      Order Summary
                    </h3>

                    <div className="summary_item">
                     <span>Yam - Grade B</span>
                     <span>₦20,000</span>
                    </div>

                   <div className="summary_item">
                    <span>Rice - 5kg</span>
                    <span>₦8,500</span>
                   </div>

                   <div className="summary_item">
                     <span>Beans - 2kg</span>
                     <span>₦6,000</span>
                   </div>

                   <hr />

                  <div className="summary_item">
                    <span>Subtotal</span>
                    <span>₦34,500</span>
                   </div>

                   <div className="summary_item">
                     <span>Delivery</span>
                     <span>₦1,500</span>
                   </div>

                   <div className="summary_item total">
                     <span>Total</span>
                     <span>₦36,500</span>
                   </div>
                </div>
              </aside>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOutPage
