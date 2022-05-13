import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";

export default function Item({name, price, img}) {

    return (
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} alt="Imagen del Producto" />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    {`Precio: $${price}`}
    </Card.Text>
    <ItemCount initial={1} stock={5} onAdd={(quantity)=> console.log(`${quantity} unidad/es de ${name} agregada/s al pedido`)}/>
    </Card.Body>
</Card>
    );
}





