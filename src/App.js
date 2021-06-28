import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';


class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Container>
            <MainRoutes />
          </Container>
        </BrowserRouter>
        <Footer />
      </>
    );
  }

}

export default App;
