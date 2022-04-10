import React from "react";
import star from '../../icon/star.svg'

const ProductCard = ({id, img, title, price, rate, handleAddItem}) => {
    return (
        <div className='content'>
            <div className='card-content-image'>
                <img className='img-product' src={img}/>
            </div>

            <div className='card-content'>
                <span className='title'>{title}</span>
                <span className='price'>{price} ₽</span>
            </div>

            <div className='card-content'>
                <div>
                    <div className='star'>
                        <img src={star}/>
                    </div>
                    <span>{rate}</span>
                </div>
                <div>
                    <button className='button-add' onClick={() => handleAddItem(id)}>купить</button>
                </div>
            </div>
        </div>
    )

}

export default ProductCard