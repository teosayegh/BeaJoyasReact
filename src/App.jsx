import React from 'react';
import NavBar from './componets/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componets/ItemListContainer';


export default function App() {
  return (
    <>
      
      <NavBar/>
      <div className="App">
      <ItemListContainer  greeting={'Hola soy un ItemListContainer'}/>
      </div>
    </>
  );
}

