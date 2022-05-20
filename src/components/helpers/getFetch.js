import img1 from "../../img/anillo_julia.jpg"
import img2 from "../../img/argolla_corazon.jpg"
import img3 from "../../img/pulsera_doblecorazon.jpg"
import img4 from "../../img/argolla_rayo.jpeg"
import img5 from "../../img/aros_doble_circulo.jpeg"
import img6 from "../../img/aros_estrella.jpeg"
import img7 from "../../img/aros_patita_perro.jpeg"
import img8 from "../../img/trepador_estrella_fugaz.jpeg"


const joyas = [{
    id: "0",
    name: "Anillo Julia",
    price: 3590,
    img: img1,
    category: "Anillo",
    stock: "5"
},
{
    id: "1",
    name: "Argollas Corazón",
    price: 3590,
    img: img2,
    category: "Argollas",
    stock: "6"
},
{
    id: "2",
    name: "Pulsera Corazón",
    price: 2710,
    img: img3,
    category: "Pulsera",
    stock: "7"
},
{
    id: "3",
    name: "Argollas Rayo",
    price: 3000,
    img: img4,
    category: "Argollas",
    stock: "8"
},
{
    id: "4",
    name: "Aros Circulo",
    price: 2590,
    img: img5,
    category: "Aros",
    stock: "9"
},
{
    id: "5",
    name: "Aros Estrella",
    price: 1885,
    img: img6,
    category: "Aros",
    stock: "10"
},
{
    id: "6",
    name: "Aros Patitas",
    price: 2380,
    img: img7,
    category: "Aros",
    stock: "4"
},
{
    id: "7",
    name: "Trepador Estrella",
    price: 2654,
    img: img8,
    category: "Aros",
    stock: "3"
},
];


export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? joyas.find(producto => producto.id === id ) : joyas                                  
                resolve( query )                           
            }, 2000)
        })            
    
}