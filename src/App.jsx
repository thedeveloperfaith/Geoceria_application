import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Page/LandingPage'
import Stores from './Page/Stores'
import Header from './Components/Header'
import TestAPI from './Components/TestAPI'
import SignUp from './Page/SignUp'
import Register from './Page/Register'
import ErrorPage from './Page/ErrorPage'
import DetailedPage from './Page/DetailedPage'
import Cart from './Components/Cart'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='*' element={<ErrorPage/>} /> 
     <Route path='/' element={<LandingPage/>} />
     <Route path='/stores' element={<Stores/>} />
     <Route path='/detailedpage/:id' element={<DetailedPage/>} />
     <Route path='/signup' element={<SignUp/>} /> 
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
