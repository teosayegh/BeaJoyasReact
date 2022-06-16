import { UseCartContext } from "../../Context/CartContext";
import './CartItem.css';
import iconDelete from "../Icons/delete.png"

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <div>
		<section>
			<div className="section container">
				<div className="col-xs-12 col-md-12">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>#id</th>
								<th>Nombre</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>${item.price}</td>
								<td>{item.quantity}</td>
								<td><button classNameName="cart__remove-icon" onClick={removeItem}>
        <img
        alt=""
        src={iconDelete}
        width="25"
        height="25"
        /></button></td>
                                
							</tr>
							
						</tbody>
					</table>
				</div>

			</div>
		</section>

	</div>
    );
}


