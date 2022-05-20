import React from 'react'

import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default function CartWidget() {
return (
    <div>
        <Link to='/cart' className="non-style" >
        <FontAwesomeIcon  icon= {faCartShopping} />
        <div className="numero">0</div>
        </Link>
    </div>
)
}
