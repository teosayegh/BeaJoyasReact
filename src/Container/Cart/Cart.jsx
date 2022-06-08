import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartList from '../../components/CartList/CartList';
import "./Cart.css"

export default function Cart() {
    const {totalItems, orderId, createOrder} = UseCartContext();
    const [orderSent, setOrderSent] = useState(false)

    function sendOrderManage(customerData) {
        setOrderSent(true);
        createOrder(customerData);
    }
    
    if (!totalItems) {
        return (
            <div className="cart">
                {orderSent ? <h1>Pedido enviado! Nro de pedido: {orderId}</h1> : <h1>El pedido está vacío</h1>}
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList sendOrderManage={sendOrderManage}/>
        </div>
    );
}


/* function generarOrden(){
    let orden = {}

    orden.buyer = {name:'Federico', email:'f@gmail.com', phone:'823456987'}
    orden.total = precioTotal()


    orden.items = cartList.map(cartItem => {

        const id = cartItem.id
        const nombre = cartItem.name
        const precio = cartItem.price * cartItem.cantidad

        
        // const cantidad-cartiter.cantidad

        return {id, nombre, precio}
    })

    console.log(orden)
} */
