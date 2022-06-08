import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {doc, getDoc, getFirestore } from "firebase/firestore"
import Loader from "../../components/Loader/Loader"

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'joyas', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch((err)=> console.log(err))
        .finally(()=>setLoader(false))     
    }, [id])


    return (
        <div>
        {loader? 
            <Loader />
        : 
        <ItemDetail item={item}/>}
        </div>
    );
}