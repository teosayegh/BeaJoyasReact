import React from 'react';
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card";

export default function Item({item}) {

    return (
        <Card style={{ width: '18rem' }}>
            
    <Card.Img variant="top" src={item.img} alt="Imagen del Producto" />
    <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Link to={`/detalle/${item.id}`}> 
        <button className="button-ver-mas">Ver más...</button>
        </Link>
    </Card.Body>
</Card>
    );
}





