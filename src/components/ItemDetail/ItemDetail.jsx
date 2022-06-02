import React from 'react'
//import Card from "react-bootstrap/Card";
import { UseCartContext } from '../../Context/CartContext';
import { BuyButton } from '../BuyButton/BuyButton';
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react";


export default function ItemDetail ({item}) {


    const [inputType, setInputType] = useState('itemCount');
    const {addToCart} = UseCartContext();
    
    function onAdd(quantity) {
        addToCart({...item, quantity})
        setInputType('buyButtons');
    }


    return (
        <div class="cardContainer">
            <div>
                <img class="cardImg"
                    src={item.img} alt="Imagen del Producto" />
            </div>
            <div class="cardProd">
                <p class="cardP">{item.category}</p>
                <h1 class="cardH1">{item.name}</h1>
                <h2 class="cardH2">{`$${item.price}`}</h2>
                <p class="cardDesc">{item.desc}</p>
                <div className="centrar-item">
                {inputType === 'itemCount' ?
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>:
                <BuyButton/>}
                </div>
            </div>
        </div>
    )
}



