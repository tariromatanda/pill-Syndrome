import React from 'react'
import data from '../../data/data'
const BestSellersCard = () => {
    return (
        <>
            {data && data.BestSellersCard.map(card => {
                return (
                    <div className="BestCard">
                        <div className="img">
                            <img src={card.image} alt="" />
                            
                        </div>
                        <div className="textBox">
                            <h2>{card.tittle}</h2>
                            <p>{card.desc} <span>{card.pricedesc}</span></p>
                            <a href="">{card.link}</a>
                        </div>
                    </div>



                )
            })}
        </>
    )
}

export default BestSellersCard
