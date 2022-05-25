import React from 'react';

import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { UseCartContext } from "../../Context/CartContext";


export default function CartWidget() {
    const {totalItems} = UseCartContext();
return (
    <div>
        <Link to='/cart' className="non-style" style={{pointerEvents: !totalItems ? 'none' : ''}}>
        <div style={{opacity: !totalItems ? '0.5' : '1'}}> </div>
        <FontAwesomeIcon  icon= {faCartShopping} />
        <div className="numero">{totalItems}</div>
        </Link>
        
    </div>
)
}
