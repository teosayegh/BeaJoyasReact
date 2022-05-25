import { UseCartContext } from "../../Context/CartContext";
import './CartItem.css';
import iconDelete from "../logos/delete.png"

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li> {item.name} - Precio: ${item.price} - Cantidad: {item.quantity} - <span className="cart__remove-icon" onClick={removeItem}>
        <img
        alt=""
        src={iconDelete}
        width="25"
        height="25"
        /></span></li>
    );
}


