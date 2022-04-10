import React, {useEffect, useState} from "react";
import Header from "./header";
import ShowCase from "./showCase";
import fetchAll from "../../api/headphones.api";

const Main = () => {
    const [basketList, setBasketList] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchAll()
            .then((data) => {
                    setItems(data)
                }
            )
    }, [])

    const updateBasketList = (index, isDelete) => {
        let items = [...basketList]
        let item = items[index]
        isDelete ? item.count-- : item.count++
        items[index] = item
        setBasketList(items)
    }

    const addNewElemInBasketList = (id) => {
        const itemIndex = items.findIndex((item) => item.id === id);
        const basketItem = {
            ...items[itemIndex],
            count: 1
        }
        setBasketList(prevState => [...prevState, basketItem])
    }

    const handleAddingItemInBasket = (id) => {
        if (basketList.length === 0) {
            addNewElemInBasketList(id)
        } else {
            const itemIndex = basketList.findIndex(item => item.id === id)
            if (itemIndex !== -1) {
                updateBasketList(itemIndex, false)
            } else {
                addNewElemInBasketList(id)
            }
        }
        console.log('basketList', basketList)
    }

    const removeElemFromBasketList = (elemIdForDelete) => {
        setBasketList(prevState => prevState.filter(el => el.id !== elemIdForDelete))
    }

    const handleRemovingItemFromBasket = (id) => {
        const itemIndex = basketList.findIndex((item) => item.id === id);
        const basketElemForDelete = basketList[itemIndex];
        if (basketElemForDelete.count === 1) {
            removeElemFromBasketList(basketElemForDelete.id)
        } else {
            updateBasketList(basketElemForDelete.id, true)
        }

    }

    const sumOfItemsInBasket = () => {
        const arrayOfCount = basketList.map((item) => item.count);
        return arrayOfCount.reduce((a, b) => a + b, 0)
    }


    return (
        <div className='page'>
            <Header itemCount={sumOfItemsInBasket()}/>
            <ShowCase addItemInBasket={handleAddingItemInBasket}
                      items={items}/>
        </div>
    )
}

export default Main