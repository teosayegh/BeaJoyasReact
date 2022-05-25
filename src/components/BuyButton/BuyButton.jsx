import React from 'react'
import { Link } from 'react-router-dom'


export const BuyButton = () => {
    return (
    <>
        <div className='buyButton'>
            <Link to={"/"}>
                <button className='button'>Seguir comprando</button>
            </Link>
            <Link to={"/cart"}>
                <button className='button'>Finalizar compra</button>
            </Link>
        </div>
    </>
    )
}
