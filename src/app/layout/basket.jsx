import React, {useState} from "react";
import CardBasket from "./cardBasket";

const Basket = ({basketList, handleDelete, handleAddingItemInBasket, handleRemovingItemFromBasket}) => {

    return (
        <div>
            <ul>
                {basketList.map((item) => {
                    return (
                        <li key={item.id}>
                            <CardBasket id={item.id}
                                        img={item.img}
                                        title={item.title}
                                        price={item.price}
                                        rate={item.rate}
                                        count={item.count}
                                        handleDecrement={handleRemovingItemFromBasket}
                                        handleIncrement={handleAddingItemInBasket}
                                        handleDelete={handleDelete}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Basket