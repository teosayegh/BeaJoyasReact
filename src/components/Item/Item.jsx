import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

export default function Item({prod}) {

    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.img} alt="Imagen del Producto" />
    <Card.Body>
    <Card.Title>{prod.name}</Card.Title>
    <Card.Text>
        {`Precio: $${prod.price}`}
    </Card.Text>
    <ItemCount initial={1} stock={5} onAdd={(quantity)=> console.log(`${quantity} unidad/es de ${prod.name} agregada/s al pedido`)}/>
    </Card.Body>
</Card>
    );
}






