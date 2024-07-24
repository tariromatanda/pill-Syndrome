import React from 'react'
import image from '../assets/Pill Syndrome/logo 1.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="text">
        <img src={image} alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis. Saepe, vel.</p>
      </div>
      <div className="text">
        <h1>Quick links</h1>
        <ul>
           <li><a href="">Connect Wallet</a></li>
           <li><a href="">Mechandize</a></li>
           <li><a href="">Promotions</a></li>
        </ul>
      </div>
      <div className="text">
        <h3>Subscribe for Merch Discount Update</h3>
        <form action="">
            <input type="text" placeholder='your email here' name="name" required/>
            <button>Subscribe</button>
        </form>

      </div>
    </div>
  )
}

export default Footer
