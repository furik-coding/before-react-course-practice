import React, {useState, useEffect} from 'react';
import './css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Income from './components/pages/Income/Income';
import firebase from './firebase';
import Expenses from './components/pages/Expenses/Expenses';
import login from './login/login'
import Statistic from './components/pages/Statistic/Statistic';



const App = () => {
  // login()
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Income exact path="/income" />
          <Expenses path="/expenses" />
          <Statistic path="/statistic" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
