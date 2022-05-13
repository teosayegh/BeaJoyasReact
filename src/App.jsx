import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';



export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element = { <ItemListContainer /> } />   
        <Route path="/detalle/:detalleId" element = { <ItemDetailContainer /> } />
        <Route path="/cart" element = { <Cart /> } />
      </Routes>
      </div>
    </BrowserRouter>
  );
}


