import React from 'react'
import image from '../assets/Pill Syndrome/Rectangle 104.png'

const About = () => {
  return (
    <div className='about'>
      <div className="text">
        <h1><span>Pill Syndrome</span></h1>
        <h1>Merch Store</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa sunt recusandae numquam ab maiores quae, nisi debitis delectus rem! Esse, neque incidunt. Ipsa odio beatae, dolorem dignissimos et exercitationem?</p>
        <button>Connect Wallet</button>
        </div>
        <div className="images">
            <div className="image">
                <img src={image} alt="" />
           
        </div>
      </div>
    </div>
  )
}

export default About
