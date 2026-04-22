import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Cart from "../Components/Cart"
import AllProducts from '../Components/AllProducts'
import CheckOutPage from '../Components/CheckOutPage'
import DetailedPage from "../Page/DetailedPage"

const LandingPage = () => {
  return (
    <>
      <Hero/>
      <AllProducts/>
      {/* <Cart/> */}
      <CheckOutPage/>
      {/* <DetailedPage/> */}
    </>
  )
}

export default LandingPage
