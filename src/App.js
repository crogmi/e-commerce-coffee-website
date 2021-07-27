import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import About from './containers/AboutPage/AboutPage';
import Order from './containers/OrderPage/OrderPage';
import ItemDetail from './containers/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className='Home'>
      <h1 className='page-title'>CoCo Coffee</h1>
    </div>
  );
};


const App = () => {

  const ROUTES = {
    ABOUT: '/about',
    ORDER: '/order',
    ORDERID: '/order/:id'
  }
  
  const [drinks, setDrinks] = useState([{
      name: 'Latte',
      milk: 'Whole',
      syrup: 0,
      drinkTemp: 'Hot',
      tempChange: true,
      flavor: 'Regular',
      flavorChange: true,
      itemNumber: 0
    }, {
      name: 'Coffee',
      milk: 'None',
      syrup: 0,
      drinkTemp: 'Hot',
      tempChange: true,
      flavor: 'Regular',
      flavorChange: false,
      itemNumber: 1
    }, 
    { name: 'Cold Brew',
      milk: 'None',
      syrup: 0,
      drinkTemp: 'Cold',
      tempChange: false,
      flavor: 'Regular',
      flavorChange: false,
      itemNumber: 2
    },
    { name: 'Espresso',
      milk: 'None',
      syrup: 0,
      drinkTemp: 'Hot',
      tempChange: false,
      flavor: 'Regular',
      flavorChange: false,
      itemNumber: 3
  }]);


  return (
    <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path={ROUTES.ABOUT}>
              <About />
            </Route>
            <Route path={ROUTES.ORDER}>
              <Order drinks={drinks} />
            </Route>
            {/*Confirm if I need to keep this item detail route - should only be accessed from order page */}
            <Route path={ROUTES.ORDERID}>
              <ItemDetail />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
