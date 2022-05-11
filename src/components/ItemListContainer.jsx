import {useState, useEffect} from "react"
import ItemList from "./ItemList";
import "./styles/ItemListContainer.css"

const joyas = [{
    id: 0,
    name: "Anillo Julia",
    price: 3590,
    img: "./img/anillo_julia.jpg",
    type: "Anillo",
},
{
    id: 1,
    name: "Argollas Corazón",
    price: 3590,
    img: "./img/argolla_corazon.jpg",
    type: "Argollas",
},
{
    id: 2,
    name: "Pulsera Corazón",
    price: 2710,
    img: "./img/pulsera_doblecorazon.jpg",
    type: "Pulsera",
},
{
    id: 3,
    name: "Argollas Rayo",
    price: 3000,
    img: "./img/argolla_rayo.jpeg",
    type: "Argollas",
},
{
    id: 4,
    name: "Aros Circulo",
    price: 2590,
    img: "./img/aros_doble_circulo.jpeg",
    type: "Aros",
},
{
    id: 5,
    name: "Aros Estrella",
    price: 1885,
    img: "./img/aros_estrella.jpeg",
    type: "Aros",
},
{
    id: 6,
    name: "Aros Patitas",
    price: 2380,
    img: "./img/aros_patita_perro.jpeg",
    type: "Aros",
},
{
    id: 7,
    name: "Trepador Estrella",
    price: 2654,
    img: "./img/trepador_estrella_fugaz.jpeg",
    type: "Aros",
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