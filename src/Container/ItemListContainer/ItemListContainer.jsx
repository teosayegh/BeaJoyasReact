import React from 'react';
import {useState, useEffect} from "react"
import ItemList from "../../components/ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css"
import { getFetch } from "../../components/helpers/getFetch"
import { useParams } from "react-router-dom";

export default function ItemListContainer (){
    const [items,setItems] = useState({});
    const [loader,setLoader] = useState(true);
    const { cat } = useParams() 

    useEffect(() => {
        if (cat) {
            getFetch()   
            .then(res=> setItems(res.filter((items) => items.category === cat)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoader(false))                             
        } else {
            getFetch()  
            .then(res=> setItems(res))
            .catch((err)=> console.log(err))
            .finally(()=>setLoader(false))                 
        }
    }, [cat])


    return (
        <div>
            {loader ? (
            <h2 className="centrar-item">Cargando...</h2>)
            : (
            <ItemList items={items} />)}
        </div>
    );
}