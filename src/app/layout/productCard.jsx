import React from "react";
// import img1 from '../layout/image/s852I.png'

const ProductCard = ({img, title, price, rate}) => {
    console.log("image", img);

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
            <button className='button-add'>купить</button>
        </div>
    )

}

export default ProductCard