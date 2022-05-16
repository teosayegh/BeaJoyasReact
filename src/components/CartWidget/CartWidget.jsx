import React from 'react'

import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function CartWidget() {
return (
    <div>
        <FontAwesomeIcon icon= {faCartShopping} />
        <div className="numero">0</div>
    </div>
)
}
