import React from 'react'
import Card from "react-bootstrap/Card";
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
        <Card className="bg-dark text-white">
        <Card.Img className="dimension" src={item.img} alt="Imagen del Producto" />
        <Card.ImgOverlay>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            {`Precio: $${item.price}`}
            </Card.Text>
            {inputType === 'itemCount' ?
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>:
            <BuyButton/>}
        </Card.ImgOverlay>
        
        </Card>
    )
}