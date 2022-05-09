import React from "react";
import { useState } from "react"; 

import "./styles/ItemCount.css";

export default function ItemCount({stock, initial, onAdd}) {
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

        <button
            className="button-primario"
            onClick={addToCart}
        >
            Añadir
        </button>
        </div>
    );
}