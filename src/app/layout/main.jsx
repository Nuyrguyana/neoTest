import React, {useEffect, useState} from "react";
import Header from "./header";
import ShowCase from "./showCase";
import fetchAllHeadphones from "../../api/headphones.api";
import fetchAllWirelessHeadphones from '../../api/wirelessHeadphones.api'
import Basket from "./basket";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "./footer";

const Main = () => {
    const [basketList, setBasketList] = useState([])
    const [headphones, setHeadphones] = useState([])
    const [wirelessHeadphones, setWirelessHeadphones] = useState([])

    useEffect(() => {
        fetchAllHeadphones()
            .then((data) => {
                    setHeadphones(data)
                }
            )
    }, [])

    useEffect(() => {
        fetchAllWirelessHeadphones()
            .then((data) => {
                    setWirelessHeadphones(data)
                }
            )
    }, [])

    const updateBasketList = (index, isDelete) => {
        const items = [...basketList]
        const item = items[index]
        isDelete ? item.count-- : item.count++
        items[index] = item
        setBasketList(items)
    }

    const addNewElemInBasketList = (id) => {
        const itemIndex = headphones.findIndex((item) => item.id === id);
        const basketItem = {
            ...headphones[itemIndex],
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
            updateBasketList(itemIndex, true)
        }

    }

    const sumOfItemsInBasket = () => {
        const arrayOfCount = basketList.map((item) => item.count);
        return arrayOfCount.reduce((a, b) => a + b, 0)
    }


    return (
        <BrowserRouter>
            <div className='page'>
                <Header itemCount={sumOfItemsInBasket()}/>

                <Switch>
                    <Route path='/'
                           exact
                           render={() => {
                               return (
                                   <ShowCase
                                       addItemInBasket={handleAddingItemInBasket}
                                       headphones={headphones}
                                       wirelessHeadphones={wirelessHeadphones}
                                   />
                               )
                           }}/>
                    <Route path='/basket'
                           exact
                           render={() => {
                               return (
                                   <Basket
                                       basketList={basketList}
                                       handleAddingItemInBasket={handleAddingItemInBasket}
                                       handleRemovingItemFromBasket={handleRemovingItemFromBasket}
                                       handleDelete={removeElemFromBasketList}
                                   />
                               )
                           }}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Main