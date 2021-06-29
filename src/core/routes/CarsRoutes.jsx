import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CarCreate from '../../pages/cars/CarCreate';
import CarDetail from '../../pages/cars/CarDetail';
import CarList from '../../pages/cars/CarList';

export default class CarsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/cars/list" exact component={CarList} />
                <Route path="/cars/create" exact component={CarCreate} />
                <Route path="/cars/detail/:id" component={CarDetail} />
                <Redirect to='/404' />
            </Switch>
        )
    }
}
