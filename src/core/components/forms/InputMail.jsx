import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class InputMail extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        validate: PropTypes.bool,
        onChange: PropTypes.func,
        children: PropTypes.element
    }

    state = { isInvalid: false };

    change = (ev) => {
        if (this.props.validate) {
            const test = regMail.test(ev.target.value);
            this.setState({ isInvalid: !test });
            this.props.onChange(ev, test);
        } else {
            this.props.onChange(ev);
        }
    }

    render() {
        console.log(this.props);

        return (
            <>
                <Form.Control type="email" placeholder={this.props.placeholder}
                    name={this.props.name} onChange={this.change} isInvalid={this.state.isInvalid} />
                <Form.Control.Feedback type="invalid">
                    {this.props.children}
                </Form.Control.Feedback>
            </>
        )
    }
}
