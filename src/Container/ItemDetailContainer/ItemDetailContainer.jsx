import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {getFetch} from "../../components/helpers/getFetch"

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const {idDetail} = useParams();

    useEffect(() => {
        setTimeout(() => {
            getFetch(idDetail)
            .then(res => setItem(res))
            .catch(err => console.log(err))
        }, 2000);
    },[idDetail]);

    return (
        <div>
        <ItemDetail item={item}/>
        </div>
    );
}