import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import BrandsService from '../../core/services/BrandsService';
import CarsService from '../../core/services/CarsService';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayToast } from '../../core/redux/toastActions';
//import Toast from '../../core/components/forms/Toast';

class CarList extends Component {
    state = { cars: [] };//, showToast: false, messageToast: '', titleToast: 'Suppression' };

    servCars = new CarsService();
    servBrands = new BrandsService();

    componentDidMount() {
        this.servCars.getCars().then(data => {
            const proms = data.map(x => {
                return this.servBrands.getBrandById(x.brandID).then(y => { x.brand = y.name; return x; });
            });
            Promise.all(proms).then(values => {
                this.setState({ cars: values });
            })

            //this.setState({ cars: data });
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
            //this.setState({ messageToast: `La voiture ${data.model} est supprimée.` });
            this.props.display({ title: 'Suppression', message: `La voiture ${data.model} est supprimée` });
            return this.servCars.getCars();
        }).then(data => {
            this.setState({ cars: data });
        });
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

            </div>
        )
    }
}

const mapDispatchToProps = (payload) => {
    return { display: bindActionCreators(displayToast, payload) };
}

export default connect(null, mapDispatchToProps)(CarList)