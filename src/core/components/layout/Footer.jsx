import './footer.css';
import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import BrandsService from '../../services/BrandsService';

export default class Footer extends Component {

    servBrands = new BrandsService();

    //name = 'toto'; KO
    state = { brands: [] }
    /*{ name: 'Audi', image: 'audi.jpg' },
    { name: 'BMW', image: 'bmw.jpg' },
    { name: 'Renault', image: 'renault.jpg' }
]
}*/

    /*brands = [
        { name: 'Audi', image: 'audi.jpg' },
        { name: 'BMW', image: 'bmw.jpg' },
        { name: 'Renault', image: 'renault.jpg' }
    ];*/

    componentDidMount() {
        //this.name = 'bob'; KO
        //this.state.name = 'bob'; KO
        //this.setState({ name: 'bob' });
        //console.log('componentDidMount', this.state.name);
        //this.setState({ brands: this.servBrands.getBrands() });
        this.servBrands.getBrands().then(data => {
            this.setState({ brands: data });
        });
    }

    render() {
        //console.log('render');
        return (
            <footer className="footer">
                <div>&copy; Formation React</div>
                <Row>
                    {this.state.brands.map((item, index) =>
                    (<Col key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`/images/${item.image}`} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>)
                    )}

                </Row>
            </footer>
        )
    }
}
