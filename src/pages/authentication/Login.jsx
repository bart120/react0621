import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputMail from '../../core/components/forms/InputMail';
import { login } from '../../core/redux/authenticationActions';

class Login extends Component {

    state = { login: '', password: '' };

    /*constructor() {
        super();
        this.changeFormField = this.changeFormField.bind(this);
    }*/

    changeFormField = (ev, isValid) => {
        //console.log(ev.target.name);
        //console.log(this);
        this.setState({ [ev.target.name]: ev.target.value });
        console.log(isValid);
    }


    submit = (ev) => {
        ev.preventDefault();
        //console.log(this.state);
        //call sso server
        this.props.login({ mail: this.state.login, name: 'Bob' });
    }

    render() {
        return (
            <div>
                <h1>Authentification</h1>
                <Form noValidate onSubmit={this.submit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Login</Form.Label>
                        {/*<Form.Control type="email" placeholder="Votre email" name="login" onChange={this.changeFormField} />*/}
                        <InputMail placeholder="Votre email" name="login" onChange={this.changeFormField} validate>
                            <div>Email invalide</div>
                        </InputMail>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Votre mot de passe" name="password" onChange={this.changeFormField} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Se connecter
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (payload) => {
    return { login: bindActionCreators(login, payload) };
};

export default connect(null, mapDispatchToProps)(Login)