import { useState } from "react";
import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartList.css';
import ListGroup from 'react-bootstrap/ListGroup'

export default function CartList({sendOrderManage}) {
    const [customerData, setCustomerData] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);
    const {cartList, clearCart, totalPrice} = UseCartContext();

    function changeHandler(e) {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }

    function dataManage() {
        setNameError(!customerData.name);
        setPhoneError(!customerData.phone);
        setEmailError(!customerData.email);
        setEmail2Error(!(customerData.email2 === customerData.email));
        if (customerData.name && customerData.phone && customerData.email && (customerData.email2 === customerData.email)) {
            sendOrderManage(customerData);
        }
    }

    return (
        <div>
            <header className="space">
			    <div className="header container">
                    <div className="col-xs-9 col-md-9">
                        <h4 className="text-center">SU PEDIDO</h4>
                    </div>
                </div>
		    </header>
            <ListGroup>
                <ListGroup.Item>{cartList.map((el) => <CartItem key={el.id} item={el}/>)}</ListGroup.Item>
            </ListGroup>
            <footer className="margin">
			    <div className="footer container">
				    <div className="col-xs-5 col-md-5">
					    <table className="table table-striped">
						<thead>
							<tr>
								<th>Total a pagar</th>

							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{`$${totalPrice}`}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</footer>
            <p>Ingrese sus datos para enviar el pedido:</p>
            <div className="form">
            <div className="contact__secction-container">
        <div className="row">
            <div className="contact__secction__item">
                <label>Nombre</label>
                {nameError && <span>Debe ingresar un nombre</span>}
                <input name="name" onChange={(e) => changeHandler(e)} type="text"/>
                
            </div>
            <div className="contact__secction__item">
                <label>Telefono</label>
                {phoneError && <span>Debe ingresar un teléfono</span>}
                <input name="phone" onChange={(e) => changeHandler(e)} type="tel"/>
            </div>
            <div className="contact__secction__item">
                <label>Correo eléctronico</label>
                {emailError && <span>Debe ingresar un correo electrónico</span>}
                <input name="email" onChange={(e) => changeHandler(e)} type="email"/>
            </div>
            <div className="contact__secction__item">
                <label>Repita correo electrónico</label>
                {email2Error && <span>El correo electrónico no coincide</span>}
                <input name="email2" onChange={(e) => changeHandler(e)} type="email"/>
            </div>
        </div>
    </div>
    </div>
            <button className="button1" onClick={clearCart}>Vaciar pedido</button>
            <button className="button1" onClick={dataManage}>Enviar pedido</button>
        </div>
    );
}

<p> DATOS PARA EL ENVÍO </p>
    