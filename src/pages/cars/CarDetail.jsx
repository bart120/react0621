import React, { Component } from 'react'
import BrandsService from '../../core/services/BrandsService';
import CarsService from '../../core/services/CarsService'

export default class CarDetail extends Component {

    state = { car: null };

    servCar = new CarsService();
    servBrand = new BrandsService();

    componentDidMount() {
        const id = this.props.match.params.id;
        this.servCar.getCarById(id).then(data => {
            this.setState({ car: data });
            //console.log('prom 1', data);
            return this.servBrand.getBrandById(data.brandID);
        }).then(data => {
            //console.log('prom 2', data);
            this.setState({ car: Object.assign(this.state.car, { brand: data.name }) });
        });
    }

    render() {
        console.log('render', this.state);
        return (
            <div>
                <h1>{this.state.car?.model}</h1>
                <p>{this.state.car?.price}</p>
                <p>{this.state.car?.dateOfCirculation}</p>
                <p>{this.state.car?.brand}</p>
            </div>
        )
    }
}
