import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';

const promise = loadStripe(
  'pk_test_51K0palFSBuZ8T7wq5NM9yQQNMAv1UX4OQJzryOFvFtTWi8dqIiEkS1ScnyjeGbUspMMF7asI1xOLQJjxFNrM3UHd00FJOLfTLm'
  );

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("The user is: ", authUser);
      if (authUser){
        // this means that the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">

        <Switch>

          <Route path ="/login">
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
