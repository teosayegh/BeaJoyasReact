import React from 'react'
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


export default function ItemDetail ({item}) {
    return (
        <Card className="bg-dark text-white">
        <Card.Img className="dimension" src={item.img} alt="Imagen del Producto" />
        <Card.ImgOverlay>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            {`Precio: $${item.price}`}
            </Card.Text>
            <ItemCount initial={1} stock={item.stock} onAdd={(quantity)=> console.log(`${quantity} unidad/es de ${item.name} agregada/s al pedido`)}/>
        </Card.ImgOverlay>
        
        </Card>
    )
}
