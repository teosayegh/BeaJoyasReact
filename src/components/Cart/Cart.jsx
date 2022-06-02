import React from 'react';
import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

export default function Cart() {
    const {cartList, clearCart, totalPrice, totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <h1>El pedido está vacío</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar pedido</button>
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
