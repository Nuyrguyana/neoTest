import React from "react";
import bucket from '../../icon/bucket.svg'

const CardBasket = ({id, img, title, price, count, handleIncrement, handleDecrement, handleDelete}) => {
    const eachSum = () => {
        return parseInt(price) * count
    }
    return (
        <div className='content'>
            <div className='card-content-header'>
                <div className='card-content-image'>
                    <img className='img-product' src={img}/>
                    <div >
                    <button
                        className='bucket'
                        onClick={() => handleDelete(id)}>
                        <img  src={bucket}/>
                    </button>
                    </div>


                </div>

                <div className='card-content'>
                    <span className='title'>{title}</span>
                    <span className='price' ><font color='#AAAAAA'> {price} ₽</font></span>
                </div>
            </div>

            <div className='card-content'>
                <div>
                    <button className='btn-count' onClick={() => handleDecrement(id)}>-</button>
                    <span>{count}</span>
                    <button className='btn-count' onClick={() => handleIncrement(id)}>+</button>
                </div>
                <span><b>{eachSum()} ₽</b></span>
            </div>

        </div>
    )
}

export default CardBasket