import {useState, useEffect} from "react"
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css"
import { getFetch } from "../../helpers/getFetch"
import { useParams } from "react-router-dom"



export default function ItemListContainer (){
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);


    const { id } = useParams() 

    useEffect(() => {
        if (id) {
            getFetch()  // fetch llamada a una api  
            .then(res=> setItems(res.filter((prods) => prods.categoria === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoader(false))                             
        } else {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setItems(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoader(false))                 
        }
    }, [id])


    return (
        <div>
            {loader ? 
            <h2 className="centrar-item">Cargando...</h2>
            : 
            <ItemList items={items} />}
        </div>
    );
}





