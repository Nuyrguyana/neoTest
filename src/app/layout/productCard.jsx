import React from "react";

const ProductCard = ({img, title, price, rate}) => {
    return (
        <div className='content'>
            <div>
                <div className='card-content-image'>
                    <img className='img-product' src={img}/>
                </div>
                <h3>{title}</h3>
            </div>
            <div className='card-content'>
                <p>{rate}</p>
                <span>{price}</span>
            </div>
            <button className='button-add'>купить</button>
        </div>
    )

}

export default ProductCard