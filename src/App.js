import React, { Component } from 'react';
import './App.css';
//import Database from './Components/Database';
import Home from './Components/Home';
import Nameform from './Components/Nameform';
import Waiting from './Components/Waiting';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact>
          <Home></Home>
        </Route>

        <Route path="/Nameform" exact>
          <Nameform></Nameform>
        </Route>

        <Route path="/Waiting" exact>
          <Waiting></Waiting>
        </Route>
      </Router>
    );
  }
}
export default App;
