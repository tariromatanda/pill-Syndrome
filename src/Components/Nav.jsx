import React from 'react'
import logo from '../assets/Pill Syndrome/logo 1.png'
import cart from '../assets/Pill Syndrome/Types=shopping-cart, Icon Size=16, Icon Icor=White.svg'
import search from '../assets/Pill Syndrome/magnifying-glass-solid (1).svg'

const Nav = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
      <ul>
        <li>Categories</li>
        <li>Cart <img src={cart} alt="" /></li>
        <li><button><img src={search} alt="" /></button></li>
        <li><button>Connect Wallet</button></li>
      </ul>
    </div>
  )
}

export default Nav
