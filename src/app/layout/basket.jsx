import React, {useState} from "react";
import CardBasket from "./cardBasket";

const Basket = ({basketList, handleAddingItemInBasket, handleRemovingItemFromBasket}) => {
    const [itemList, setItemList] = useState(basketList)

    const handleDelete = (id) => {
        setItemList(prevState => prevState.filter(item => item.id !== id))
    }

    const handleIncrement = (id) => {
        // handleAddingItemInBasket(id)
    }

    const handleDecrement = () => {
        // handleRemovingItemFromBasket
    }

    return (
        <div>
            <ul>
                {basketList.map((item) => {
                    return (
                        <li
                            key={item.id.toString()}
                            // onClick={() => addItemInBasket(item.id)}

                        >
                            <CardBasket id={item.id}
                                        img={item.img}
                                        title={item.title}
                                        price={item.price}
                                        rate={item.rate}
                                        count={item.count}
                                        handleDecrement={handleDecrement}
                                        handleIncrement={handleIncrement}
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