import React from 'react'
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount"


export default function ItemDetail ({item}) {
    return (
        <Card className="bg-dark text-white">
        <Card.Img src={item.Img} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            {`Precio: $${item.price}`}
            </Card.Text>
        </Card.ImgOverlay>
        <ItemCount initial={1} id={item.id} stock={5} onAdd={(quantity)=> console.log(`${quantity} unidad/es de ${item.name} agregada/s al pedido`)}/>
        </Card>
    )
}
