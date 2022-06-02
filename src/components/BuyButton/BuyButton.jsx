import React from 'react'
import { Link } from 'react-router-dom'
import "./BuyButton.css"

export const BuyButton = () => {
    return (
    <>
        <div >
            <Link to={"/"}>
                <button className='button1'>Seguir comprando</button>
            </Link>
            <Link to={"/cart"}>
                <button className='button1'>Finalizar compra</button>
            </Link>
        </div>
    </>
    )
}
