const joyas = [{
    id: "0",
    name: "Anillo Julia",
    price: 3590,
    img: "../../../public/img/anillo_julia.jpg",
    category: "Anillo",
},
{
    id: "1",
    name: "Argollas Corazón",
    price: 3590,
    img: "/public/img/argolla_corazon.jpg",
    category: "Argollas",
},
{
    id: "2",
    name: "Pulsera Corazón",
    price: 2710,
    img: "/public/img/pulsera_doblecorazon.jpg",
    category: "Pulsera",
},
{
    id: "3",
    name: "Argollas Rayo",
    price: 3000,
    img: "/public/img/argolla_rayo.jpeg",
    category: "Argollas",
},
{
    id: "4",
    name: "Aros Circulo",
    price: 2590,
    img: "/public/img/aros_doble_circulo.jpeg",
    category: "Aros",
},
{
    id: "5",
    name: "Aros Estrella",
    price: 1885,
    img: "/public/img/aros_estrella.jpeg",
    category: "Aros",
},
{
    id: "6",
    name: "Aros Patitas",
    price: 2380,
    img: "/public/img/aros_patita_perro.jpeg",
    category: "Aros",
},
{
    id: "7",
    name: "Trepador Estrella",
    price: 2654,
    img: "/public/img/trepador_estrella_fugaz.jpeg",
    category: "Aros",
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
