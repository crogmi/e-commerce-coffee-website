import React from 'react';
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
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/order' exact component={Order} />
          <Route path='/order/:id' component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
