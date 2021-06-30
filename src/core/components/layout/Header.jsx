import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/authenticationActions';
import Toast from '../forms/Toast';

class Header extends Component {

    onLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="#home">Formation React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Accueil</Link>
                            <Link to="/cars/list" className="nav-link">Voitures</Link>
                            <Link to="/cars/create" className="nav-link">Ajouter</Link>
                            {this.props.isConnected ?
                                (<>
                                    <span className="text-white">Bonjour {this.props.user.name}</span>
                                    <Button onClick={this.onLogout}>Se déconnecter</Button>
                                </>) :
                                (<Link to="/auth/login" className="nav-link">Connexion</Link>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar >
                <Toast />
            </>
        )
    }
}

const mapStateToProps = (stateStore) => {
    return { isConnected: stateStore.auth.isConnected, user: stateStore.auth.user };
}

const mapDispatchToProps = (payload) => {
    return { logout: bindActionCreators(logout, payload) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)