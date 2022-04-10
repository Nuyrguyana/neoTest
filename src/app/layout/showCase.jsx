import React from "react";
import ProductCard from "./productCard";

const ShowCase = ({items, addItemInBasket}) => {
    return (
        <div className='container'>
            <ul>
                <p className='subtitle'>Наушники</p>
                {items.map((item) => {
                    return (<li
                            key={item.id.toString()}
                            onClick={() => addItemInBasket(item.id)}
                        >
                            <ProductCard img={item.img}
                                         title={item.title}
                                         price={item.price}
                                         rate={item.rate}/>
                        </li>
                    )

                })}
            </ul>
            <ul>
                <p className='subtitle'>Беспроводные наушники</p>
            </ul>
        </div>
    )
}

export default ShowCase