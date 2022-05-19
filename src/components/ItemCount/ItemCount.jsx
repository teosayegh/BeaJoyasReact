import React from "react";
import { useState } from "react"; 
import { Link } from "react-router-dom";

import "./ItemCount.css";

export default function ItemCount({id, stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    function increase() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } 
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } 
    }

    function addToCart() {
        onAdd(quantity);
    }

    return (
        <div className="main-container">
        <div className="container-contador">
            <button
            className="botones"
            onClick={decrease}
            >
            -
            </button>
            <span className="count-container__qty">{quantity}</span>
            <button
            className="botones"
            onClick={increase}
            >
            +
            </button>
        </div>

        <Link to={`/detalle/${id}`}> 
        <button className="button-primario" onClick={addToCart}>Ver más...</button>
        </Link>
        
        </div>
    );
}



