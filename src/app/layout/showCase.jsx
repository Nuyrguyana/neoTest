import React, {useEffect, useState} from "react";
import ProductCard from "./productCard";

const ShowCase = ({items, addItemInBasket}) => {
    return (
        <div>
            <ul>
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
        </div>
    )
}

export default ShowCase