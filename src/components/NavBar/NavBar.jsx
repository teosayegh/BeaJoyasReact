import React from "react";
import "./NavBar.css";
import logo from "../logos/apple-icon.png";
import CartWidget from "../CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";


const array = [
    {idCategoria: '1', name: 'aros', nameButton: 'Aros'},
    {idCategoria: '2', name: 'argollas', nameButton: 'Argollas'},
    {idCategoria: '3', name: 'anillos', nameButton: 'Anillos'},
    {idCategoria: '4', name: 'pulseras', nameButton: 'Pulseras'},
]

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
            <Nav className="me-auto">
                    {array.map(param => <NavLink key={param.id} to={`/categoria/${param.name}`}>{param.nameButton}</NavLink>) }
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
        </Container>
    </Navbar>
);
};

export default NavBar;