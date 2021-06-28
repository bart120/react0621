import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../pages/authentication/Login';
import CarCreate from '../../pages/cars/CarCreate';
import CarList from '../../pages/cars/CarList';
import Home from '../../pages/home/Home';
import NotFound from '../../pages/home/NotFound';

export default class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cars/list" exact component={CarList} />
                <Route path="/cars/create" exact component={CarCreate} />
                <Route path="/auth/login" exact component={Login} />
                {/*<Route path="*" exact component={NotFound} />*/}
                <Route path="/404" exact component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        )
    }
}
