import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Formation React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Accueil</Nav.Link>
                        <Nav.Link href="#">Voitures</Nav.Link>
                        <Nav.Link href="#">Ajouter</Nav.Link>
                        <Nav.Link href="#">Connexion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}
