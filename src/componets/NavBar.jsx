import React from 'react';
import './styles/NavBar.css';
import logo from './img/logo.png';

const NavBar = () => {

    return (
        <header className="header">
            <div className="logo-container">
                <img src= {logo} alt="logo" height="50" width="50"/>
            </div>

            <nav>
                <ul className="nav-container">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">Productos</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default NavBar;