import { Toast as BootstrapToast } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { Component } from 'react'

export default class Toast extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        show: PropTypes.bool,
        closeToast: PropTypes.func.isRequired
    }

    //state = { showToast: false }

    /*closeToast = () => {
        this.setState({ showToast: false });
    }*/

    /*componentDidUpdate() {
        //console.log('update', this.props);
        if (this.props.show !== this.state.showToast) {
            this.setState({ showToast: this.props.show });
        }
    }*/

    render() {
        //console.log('render toast');
        return (
            <BootstrapToast show={this.props.show} onClose={this.props.closeToast}>
                <BootstrapToast.Header>
                    <strong className="mr-auto">{this.props.title}</strong>
                    <small>just now</small>
                </BootstrapToast.Header>
                <BootstrapToast.Body>{this.props.message}</BootstrapToast.Body>
            </BootstrapToast>
        )
    }
}



