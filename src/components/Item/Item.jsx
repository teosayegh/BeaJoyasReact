import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card";

export default function Item({el}) {

    return (
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.img} alt="Imagen del Producto" />
    <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
    {`Precio: $${el.price}`}
    </Card.Text>
    <Link to={`/detalle/${el.id}`}> 
        <button className="button-primario">Ver más...</button>
        </Link>
    </Card.Body>
</Card>
    );
}





