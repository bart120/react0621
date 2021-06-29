import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CarCreate from '../../pages/cars/CarCreate';
import CarList from '../../pages/cars/CarList';

export default class CarsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/cars/list" exact component={CarList} />
                <Route path="/cars/create" exact component={CarCreate} />
                <Redirect to='/404' />
            </Switch>
        )
    }
}
