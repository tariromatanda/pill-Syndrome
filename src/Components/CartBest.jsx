import React from 'react'
import data from '../../data/data'

const CartBest = () => {
  return (
   <>
   {
    data && data.CartSection.map(card =>{
        return(
        <div className="carts">
        <div className="img">
         <img src={card.image} alt="" />
         <div className="overlay"></div>
         </div> 
         <div className="textBox">
             <button>{card.title}</button>
         </div>
     </div>
        )
    }

    )
   }
   </>
  )
}

export default CartBest
