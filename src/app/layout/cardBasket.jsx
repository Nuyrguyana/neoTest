import React from "react";

const CardBasket = ({id, img, title, price, rate, count, handleIncrement, handleDecrement, handleDelete }) => {

    console.log("id", id)
    console.log("price", price)
    console.log("count", count)

  return (
      <div className='content'>
          <div className='card-content-header'>
              <div className='card-content-image'>
                  <img className='img-product' src={img}/>
              </div>
              <h3>{title}</h3>
          </div>
          <div className='card-content'>
              <p>{rate}</p>
              <span>{price}</span>
          </div>
             <button>Delete</button>
              <button>+</button>
              <button>-</button>
      </div>
  )
}

export default CardBasket