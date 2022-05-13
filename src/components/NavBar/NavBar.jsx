import React from "react";
import "./NavBar.css";
import logo from "../../logos/apple-icon.png";
import CartWidget from "../CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
return (
    <Navbar className="Navbar-bg" expand="lg">
        <Container>
        <Navbar.Brand>
            <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            />
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="no-style">Home</NavLink>
                    <NavLink to="/" className="no-style">Anillos</NavLink>
                    <NavLink to="/" className="no-style">Pulseras</NavLink>
                    <NavLink to="/" className="no-style">Argollas</NavLink>
                    <NavLink to="/" className="no-style">Aros</NavLink>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
        </Container>
    </Navbar>
);
};

export default NavBar;