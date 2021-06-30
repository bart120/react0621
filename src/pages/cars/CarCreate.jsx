import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import BrandsService from '../../core/services/BrandsService';
import CarsService from '../../core/services/CarsService';
//import Toast from '../../core/components/forms/Toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayToast } from '../../core/redux/toastActions';

class CarCreate extends Component {

    servBrands = new BrandsService();
    servCars = new CarsService();

    state = { brands: [], car: {} };//, showToast: false, messageToast: '', titleToast: '' }

    componentDidMount() {
        this.servBrands.getBrands().then(data => {
            data.sort((a, b) => a.name < b.name ? -1 : 1);
            this.setState({ brands: data });
        });
    }

    submit = (ev) => {
        ev.preventDefault();
        /*this.servCars.insert(this.state.car).then((data) => {
            //this.setState({ showToast: true, titleToast: 'Bravo!', messageToast: `La voiture a été ajoutée.` });
            this.props.display({ title: 'Bravo!', message: 'La voiture a été ajoutée.' });
            this.props.history.push(`/cars/detail/${data.id}`)
        });*/
        this.props.display({ title: 'Bravo!', message: 'La voiture a été ajoutée.' });

    }

    changeFormField = (ev) => {
        const fieldName = ev.target.name;
        const value = ev.target.value;
        const newCar = Object.assign(this.state.car, { [fieldName]: value });
        this.setState({ car: newCar });
    }

    /*closeToast = () => {
        this.setState({ showToast: false });
    }*/

    render() {
        console.log(this);
        return (
            <>
                <div>
                    <h1>Ajouter une voiture</h1>
                    <Form noValidate onSubmit={this.submit}>
                        <Form.Group>
                            <Form.Label>Modèle</Form.Label>
                            <Form.Control type="text" placeholder="Modèle" name="model" onChange={this.changeFormField} value={this.state?.car?.model} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type="number" placeholder="Prix" name="price" onChange={this.changeFormField} value={this.state.car.price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date de mise en circulation</Form.Label>
                            <Form.Control type="date" placeholder="Date de mise en circulation" name="dateOfCirculation" onChange={this.changeFormField} value={this.state.car.dateOfCirculation} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Marque</Form.Label>
                            <Form.Control as="select" custom name="brandID" onChange={this.changeFormField} value={this.state.car.brandID}>
                                <option value=''></option>
                                {this.state.brands.map(brand => (
                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enregistrer
                        </Button>
                    </Form>
                </div>

            </>
        )
    }
}

const mapDispatchToProps = (payload) => {
    return { display: bindActionCreators(displayToast, payload) }
}

export default connect(null, mapDispatchToProps)(CarCreate)