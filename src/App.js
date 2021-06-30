import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';


class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Container>
              <MainRoutes />
            </Container>
          </BrowserRouter>
          <Footer />
        </Provider>
      </>
    );
  }

}

export default App;
