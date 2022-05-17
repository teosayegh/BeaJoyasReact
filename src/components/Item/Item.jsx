import ItemCount from "../ItemCount/ItemCount";
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
    <ItemCount initial={1} id={el.id} stock={5} onAdd={(quantity)=> console.log(`${quantity} unidad/es de ${el.name} agregada/s al pedido`)}/>
    </Card.Body>
</Card>
    );
}





