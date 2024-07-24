import React from 'react'
import Nav from './Components/Nav'
import About1 from './Components/About1'
import About from './Components/About'
import BestSellers from './Components/BestSellers'
import Cart from './Components/Cart'
import Purchases from './Components/Purchases'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Nav/>  
    <About1/>
    <About/>
    <BestSellers/>
   <Cart/>
   <Purchases/>
   <Footer/>
    </>
  )
}

export default App
