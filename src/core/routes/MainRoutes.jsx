import React, { Component, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
//import Login from '../../pages/authentication/Login';
import Home from '../../pages/home/Home';
import NotFound from '../../pages/home/NotFound';
import { Spinner } from 'react-bootstrap';

const login = React.lazy(() => import('../../pages/authentication/Login'));
const cars = React.lazy(() => import('./CarsRoutes'));

export default class MainRoutes extends Component {
    render() {
        return (
            <Suspense fallback={this.spinner}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cars" component={cars} />
                    <Route path="/auth/login" exact component={login} />
                    {/*<Route path="*" exact component={NotFound} />*/}
                    <Route path="/404" exact component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Suspense>
        )
    }

    spinner = (
        <div>
            <Spinner animation="border" variant="primary" />
            Chargement en cours...
        </div>
    );
}
