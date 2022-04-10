import React from "react";
import CardBasket from "./cardBasket";
import TotalBasketCard from "./totalBasketCard";
import Footer from "./footer";

const Basket = ({basketList, handleDelete, handleAddingItemInBasket, handleRemovingItemFromBasket}) => {

    const allSum = () => {
        const sumForEachItemArr = basketList.map((item) => {
            const itemPrice = parseInt(item.price);
            return itemPrice * item.count
        })
        return sumForEachItemArr.reduce((a, b) => a + b, 0)
    }
    return (
        <div>
            <ul>
                {basketList.map((item) => {
                    return (
                        <li
                            className='card-product-basket'
                            key={item.id}>
                            <CardBasket id={item.id}
                                        img={item.img}
                                        title={item.title}
                                        price={item.price}
                                        count={item.count}
                                        handleDecrement={handleRemovingItemFromBasket}
                                        handleIncrement={handleAddingItemInBasket}
                                        handleDelete={handleDelete}
                            />
                        </li>
                    )
                })}
                <TotalBasketCard allSum={allSum()}/>
                <Footer/>
            </ul>
        </div>
    )
}

export default Basket