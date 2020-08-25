import React from 'react';
import './App.scss';
import Home from './components/home/Home';
import Food from './components/food/Food';
import Checkout from './components/checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/food" exact component={Food} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </Router>
  );
}




export default App;
