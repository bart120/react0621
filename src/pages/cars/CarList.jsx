import React, { Component } from 'react'
import { Table, Toast } from 'react-bootstrap';
import BrandsService from '../../core/services/BrandsService';
import CarsService from '../../core/services/CarsService';
import { Link } from 'react-router-dom';

export default class CarList extends Component {
    state = { cars: [], showToast: false, messageToast: '' };

    servCars = new CarsService();
    servBrands = new BrandsService();

    componentDidMount() {
        this.servCars.getCars().then(data => {
            //Promise.all(data.map(x => this.servBrands.getBrandById(x.brandID)))



            /*data.map(async x => {
                //console.log('x', x);
                //return this.servBrands.getBrandById(x.brandID).then(y => { x.brand = y.name; console.log('y', y); });
                x.brand = "bob";//
                console.log((await this.servBrands.getBrandById(x.brandID)).data.name);
                console.log('x', x);
                return x;
            });
            console.log('cars', data);*/
            this.setState({ cars: data });
        });
    }

    currency = (value) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
    }

    dateFormat = (value) => {
        //return moment(value).format('LL');
        return new Date(value).toLocaleDateString('fr-FR');
    }

    delete = (id) => {
        this.servCars.deleteCar(id).then(data => {
            //alert(`La voiture ${data.model} est supprimée.`, 'OK');
            this.setState({ messageToast: `La voiture ${data.model} est supprimée.` });
            return this.servCars.getCars();
        }).then(data =>
            this.setState({ cars: data, showToast: true })
        );
    }

    closeToast = () => {
        this.setState({ showToast: false, messageToast: '' });
    }

    render() {
        //console.log('state', this.state.cars);
        return (
            <div>
                <h1>Liste des voitures</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Marque</th>
                            <th>Modèle</th>
                            <th>Prix</th>
                            <th>Date de mis en circulation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(car => {
                            //console.log(car.brand);

                            return (
                                <tr key={car.id}>
                                    <td>{car.id}</td>
                                    <td>{car.brand}</td>
                                    <td>{car.model}</td>
                                    <td>{this.currency(car.price)}</td>
                                    <td>{this.dateFormat(car.dateOfCirculation)}</td>
                                    <td>
                                        <Link to={`/cars/detail/${car.id}`} className="btn btn-primary" >détail</Link>
                                        <button className="btn btn-danger" onClick={() => this.delete(car.id)}>suppr.</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Toast show={this.state.showToast} onClose={this.closeToast}>
                    <Toast.Header>
                        <strong className="mr-auto">Suppression</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{this.state.messageToast}</Toast.Body>
                </Toast>
            </div>
        )
    }
}
