import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


export default function App() {
  return (
      <div className="App">
      <NavBar/>
      <ItemListContainer /> 
      </div>
  );
}

