import React from 'react'
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount"


export default function ItemDetail ({el}) {
    return (
        <Card className="bg-dark text-white">
        <Card.Img src={el.Img} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>
            {`Precio: $${el.price}`}
            </Card.Text>
        </Card.ImgOverlay>
        <ItemCount initial={1} stock={5} onAdd={(quantity)=> console.log(`${quantity} unidad/es de ${el.name} agregada/s al pedido`)}/>
        </Card>
    )
}
