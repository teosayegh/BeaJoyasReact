import React from 'react';
import {useState, useEffect} from "react"
import ItemList from "../../components/ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import Loader from '../../components/Loader/Loader';

export default function ItemListContainer (){
    const [items,setItems] = useState({});
    const [loader,setLoader] = useState(true);
    const { cat } = useParams() 

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, "joyas")

    if(cat){
        setLoader(true)
        const queryCollectionFilter = query(
        queryCollection, where("category", "==", cat)
        );
        getDocs(queryCollectionFilter)
        .then((resp) => setItems(resp.docs.map((items)=> ({ id: items.id, ...items.data()}))
        )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoader(false))
    } else{
        getDocs(queryCollection)
        .then((resp) => setItems(resp.docs.map((items)=> ({ id: items.id, ...items.data()}))
        )
        )
        .catch((err)=> console.log(err))
        .finally(()=>setLoader(false))
    }
}, [cat])

    return (
        <div>
            {loader ? 
                <Loader />
            : 
            <ItemList items={items} />}
        </div>
    );
}