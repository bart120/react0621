import { Toast as BootstrapToast } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideToast } from '../../redux/toastActions';

class Toast extends Component {
    /*static propTypes = {
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        show: PropTypes.bool,
        closeToast: PropTypes.func.isRequired
    }*/

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

    close = () => {
        this.props.hide();
    }

    render() {
        console.log(this);
        return (
            <BootstrapToast show={this.props.show} onClose={this.close}>
                <BootstrapToast.Header>
                    <strong className="mr-auto">{this.props.title}</strong>
                    <small>just now</small>
                </BootstrapToast.Header>
                <BootstrapToast.Body>{this.props.message}</BootstrapToast.Body>
            </BootstrapToast>
        )
    }
}

const mapStateToProps = (stateReducer) => {
    return { show: stateReducer.show, title: stateReducer.title, message: stateReducer.message };
}

const mapDispatchToProps = (payload) => {
    return { hide: bindActionCreators(hideToast, payload) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast)

