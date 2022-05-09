import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



export default function App() {
  
  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos`);
    console.log ("Agregaste " + quantity + " productos");
  };
  
  return (
      <div className="App">
      <NavBar/>
      <ItemListContainer  greeting={'Hola soy un ItemListContainer'}/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </div>
  );
}

