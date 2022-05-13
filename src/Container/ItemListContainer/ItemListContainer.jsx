import {useState, useEffect} from "react"
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css"
import { getFetch } from "../../helpers/getFetch"
import { useParams } from "react-router-dom"


export default function ItemListContainer (){
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);


    /* const { id } = useParams()  */

    useEffect(() => {
            getFetch()   
            .then(res=> setItems(res))
            .catch((err)=> console.log(err))
            .finally(()=>setLoader(false))                 
        }
    , [])

    return (
        <div>
            {loader ? 
            <h2 className="centrar-item">Cargando...</h2>
            : 
            <ItemList items={items} />}
        </div>
    );
}





