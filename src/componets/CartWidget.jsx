import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './styles/CartWidget.css';



export default function CartWidget() {
return (
    <div className="">
        <img src={FaShoppingCart}  alt="carrito"/>
        <div className="numero">0</div>
    </div>
)
}
