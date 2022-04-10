import React from "react";

const CardBasket = ({id, img, title, price, count, handleIncrement, handleDecrement, handleDelete}) => {
    const eachSum = () => {
        return parseInt(price) * count
    }
    return (
        <div className='content'>
            <div className='card-content-header'>
                <div className='card-content-image'>
                    <img className='img-product' src={img}/>
                </div>

                <div className='card-content'>
                    <span className='title'>{title}</span>
                    <span className='price'>{price} ₽</span>
                </div>
            </div>

            <div className='card-content'>
                <div>
                    {/*<button onClick={() => handleDelete(id)}>Delete</button>*/}
                    <button className='btn-count' onClick={() => handleDecrement(id)}>-</button>
                    <span>{count}</span>
                    <button className='btn-count' onClick={() => handleIncrement(id)}>+</button>
                </div>
                <span>{eachSum()}</span>
            </div>

        </div>
    )
}

export default CardBasket