import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Formation React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Accueil</Link>
                        <Link to="/cars/li" className="nav-link">Voitures</Link>
                        <Link to="/cars/create" className="nav-link">Ajouter</Link>
                        <Link to="/auth/login" className="nav-link">Connexion</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}
