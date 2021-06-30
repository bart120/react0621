import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={() => {
                return (this.props.isConnected ?
                    (<Component />) :
                    (<Redirect to={{ pathname: '/auth/login' }} />)
                );
            }} />
        )
    }
}

const mapStateToProps = (stateReducer) => {
    return { isConnected: stateReducer.auth.isConnected };
}

export default connect(mapStateToProps)(PrivateRoute)