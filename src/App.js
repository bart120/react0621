import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Container>
          <br /><br />
        </Container>
        <Footer />
      </>
    );
  }

}

export default App;
