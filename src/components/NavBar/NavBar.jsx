import React from "react";
import "./NavBar.css";
import logo from "../logos/apple-icon.png";
import CartWidget from "../CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
return (
    <Navbar className="Navbar-bg" expand="lg">
        <Container>
        <NavLink to="/">
            <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            />
        </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Link to='/category/Aros'>Aros </Link>
            <NavLink to="/category/Argollas">Argollas</NavLink>
            <NavLink to="/category/Anillos">Anillos</NavLink>
            <NavLink to="/category/Pulseras">Pulseras</NavLink>
            </Navbar.Collapse>
            <CartWidget/>
        </Container>
    </Navbar>
);
};

export default NavBar;