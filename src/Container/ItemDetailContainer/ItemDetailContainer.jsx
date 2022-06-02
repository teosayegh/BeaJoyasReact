import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {doc, getDoc, getFirestore } from "firebase/firestore"
import Spinner from 'react-bootstrap/Spinner'

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
            <div className="box">
                <div>
                    <Spinner animation="border" role="status" className="color">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        : 
        <ItemDetail item={item}/>}
        </div>
    );
}