import React from "react";
import "./styles/NavBar.css";
import logo from "./img/apple-icon.png";
import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
return (
    <Navbar className="Navbar-bg" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="">Sobre Nosotros</Nav.Link>
                    <Nav.Link href="">Shop</Nav.Link>
                    <Nav.Link href="">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
        </Container>
    </Navbar>
);
};

export default NavBar;