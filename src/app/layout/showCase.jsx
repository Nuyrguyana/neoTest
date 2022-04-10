import React from "react";
import ProductCard from "./productCard";
import Footer from "./footer";

const ShowCase = ({headphones, wirelessHeadphones, addItemInBasket}) => {
    return (
        <div className='container'>
            <div className='ul-showcase'>
                <ul>
                    <p className='subtitle'>Наушники</p>
                    {headphones.map((item) => {
                        return (<li
                                className='card-product'
                                key={item.id.toString()}
                            >
                                <ProductCard id={item.id}
                                             img={item.img}
                                             title={item.title}
                                             price={item.price}
                                             rate={item.rate}
                                             handleAddItem={addItemInBasket}

                                />
                            </li>
                        )

                    })}
                </ul>
                <ul>
                    <p className='subtitle'>Беспроводные наушники</p>
                    {wirelessHeadphones.map((item) => {
                        return (<li
                                className='card-product'
                                key={item.id.toString()}
                            >
                                <ProductCard id={item.id}
                                             img={item.img}
                                             title={item.title}
                                             price={item.price}
                                             rate={item.rate}
                                             handleAddItem={addItemInBasket}

                                />
                            </li>
                        )

                    })}
                </ul>
            </div>
        </div>
    )
}

export default ShowCase