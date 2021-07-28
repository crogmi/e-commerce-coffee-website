import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import About from './containers/AboutPage/AboutPage';
import Order from './containers/OrderPage/OrderPage';
import Product from './containers/Product/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = ({match}) => {

  const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    ORDER: '/order',
    ORDERID: '/order/:_id'
  }

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Switch>
            <Route path={ROUTES.HOME} exact component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.ORDER} exact component={Order} />
            <Route path={ROUTES.ORDERID} component={Product}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
