import React, { useEffect } from 'react';
import './App.css';
import Payment from './Payment'
import Orders from './Orders'
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51Hn0zQGHV4fORxWDJjXGfZluWENwupztljKHNzn5KGj7aAwrEGGr8Q11fVHVGgEEq6v8K5JlJgsDS0J1GGHPcUmc00a2G8l5w7');

function App() {
  const [{} , dispatch ] = useStateValue();


  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if (authUser) {
        // the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    // BEM
    <Router>
    <div className="app">
      <Switch>
      <Route path="/orders">
        <Header />
        <Orders />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
      <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
