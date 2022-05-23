import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {getFetch} from "../../components/helpers/getFetch"

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        getFetch(id) 
        .then(respuesta=> setItem(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoader(false))     
    }, [id])


    return (
        <div>
        {loader? 
        <h2 className="centrar-item">Cargando...</h2>
        : 
        <ItemDetail item={item}/>}
        </div>
    );
}