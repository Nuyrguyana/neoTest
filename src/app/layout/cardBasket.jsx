import React from "react";

const CardBasket = ({id, img, title, price, rate, count, handleIncrement, handleDecrement, handleDelete}) => {

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
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleIncrement(id)}>+</button>
                <span>{count}</span>
            <button onClick={() => handleDecrement(id)}>-</button>
        </div>
    )
}

export default CardBasket