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
            <form action="">
                <input name="name" onChange={(e) => changeHandler(e)} type="text" placeholder="Nombre" />
                {nameError && <span>Debe ingresar un nombre</span>}
                <br />
                <input name="phone" onChange={(e) => changeHandler(e)} type="tel" placeholder="Teléfono" />
                {phoneError && <span>Debe ingresar un teléfono</span>}
                <br />
                <input name="email" onChange={(e) => changeHandler(e)} type="email" placeholder="Correo eléctronico" />
                {emailError && <span>Debe ingresar un correo electrónico</span>}
                <br />
                <input name="email2" onChange={(e) => changeHandler(e)} type="email" placeholder="Repita correo electrónico" />
                {email2Error && <span>El correo electrónico no coincide</span>}
                <br />
                <textarea name="comment" onChange={(e) => changeHandler(e)} id="" cols="30" rows="10"></textarea>
            </form>
            <button className="button1" onClick={clearCart}>Vaciar pedido</button>
            <button className="button1" onClick={dataManage}>Enviar pedido</button>
        </div>
    );
}

/* <div className="cartInfo">
                <form onSubmit={(e) => newOrder(e)}>
                  <input type="email" placeholder="Mail" name="email" onChange={handleInputChange} />
                  <input type="text" placeholder="Nombre" name="name" onChange={handleInputChange} />
                  <input type="text" placeholder="Apellido" name="lastName" onChange={handleInputChange} />
                  <input type="text" placeholder="Dirección" name="adress" onChange={handleInputChange} />
                  <input type="text" placeholder="Localidad" name="city" onChange={handleInputChange} />
                  <button type="submit">Terminar pedido</button>
                </form>
              </div> */