import {useState, useEffect} from "react"
import ItemList from "./ItemList";
import "./styles/ItemListContainer.css"
import AJ from "./img/anillo_julia.jpg"
import AC from "./img/argolla_corazon.jpg"
import PC from "./img/pulsera_doblecorazon.jpg"
import AR from "./img/argolla_rayo.jpeg"
import ADC from "./img/aros_doble_circulo.jpeg"
import AE from "./img/aros_estrella.jpeg"
import AP from "./img/aros_patita_perro.jpeg"
import TE from "./img/trepador_estrella_fugaz.jpeg"

const joyas = [{
    id: "0",
    name: "Anillo Julia",
    price: 3590,
    img: AJ,
    categoria: "Anillo",
},
{
    id: "1",
    name: "Argollas Corazón",
    price: 3590,
    img: AC,
    categoria: "Argollas",
},
{
    id: "2",
    name: "Pulsera Corazón",
    price: 2710,
    img: PC,
    categoria: "Pulsera",
},
{
    id: "3",
    name: "Argollas Rayo",
    price: 3000,
    img: AR,
    categoria: "Argollas",
},
{
    id: "4",
    name: "Aros Circulo",
    price: 2590,
    img: ADC,
    categoria: "Aros",
},
{
    id: "5",
    name: "Aros Estrella",
    price: 1885,
    img: AE,
    categoria: "Aros",
},
{
    id: "6",
    name: "Aros Patitas",
    price: 2380,
    img: AP,
    categoria: "Aros",
},
{
    id: "7",
    name: "Trepador Estrella",
    price: 2654,
    img: TE,
    categoria: "Aros",
},
];

const getFetch = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(joyas);
    }, 2000);
})

export default function ItemListContainer (){
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);


    useEffect(() => {
        getFetch
        .then(res => setItems(res))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div>
            {loader? <h2 className="centrar-item">Cargando...</h2>: <ItemList items={items} />}
        </div>
    );
}