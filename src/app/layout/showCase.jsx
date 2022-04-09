import React, {useEffect, useState} from "react";
import ProductCard from "./productCard";
import fetchAll from "../../api/headphones.api";
// import api from "../../api/api";

const ShowCase = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        // api.headphones
            fetchAll()
            .then((data) => {
                    console.log("data", data);
                    setItems(data)
                    // setItems((prevState) => prevState.push(...data))
                }
            )
    }, [])
    console.log("items",items)
    return (
        <div className='content-container'>
            <p className='subtitle'>Наушники</p>
            {items.map(item => (
                    <ProductCard img = {item.img}
                                 title = {item.title}
                                 price = {item.price}
                                 rate = {item.rate}/>
                )
            )}

            <p className='subtitle'>Беспроводные наушники</p>
        </div>
    )
}

export default ShowCase