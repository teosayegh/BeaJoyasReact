import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';


export default function App() {
  return (
      <div className="App">
      <NavBar/>
      <ItemListContainer /> 
      </div>
  );
}

