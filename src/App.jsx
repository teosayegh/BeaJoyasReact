import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer'
import Cart from "./components/Cart/Cart"


export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element = { <Cart /> } />
        <Route path="/*" element={<Navigate to="/" replace/>} />
      </Routes>
    </div>
  </BrowserRouter>
);
}