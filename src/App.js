import React, { Component } from 'react';
import './App.css';
//import Database from './Components/Database';
import Home from './Components/Home';
import Nameform from './Components/Nameform';
import Waiting from './Components/Waiting';
import Matched from './Components/Matched';
import Ageslider from './Components/Ageslider';
import Questions from './Components/Questions';
import Waitingotherplayerdone from './Components/Waitingotherplayerdone';
import Matchedevent from './Components/Matchedevent';
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
        <Route path="/Matched" exact>
          <Matched></Matched>
        </Route>
        <Route path="/Ageslider" exact>
          <Ageslider></Ageslider>
        </Route>
        <Route path="/Questions" exact>
          <Questions></Questions>
        </Route>

        <Route path="/Waitingotherplayerdone" exact>
          <Waitingotherplayerdone></Waitingotherplayerdone>
        </Route>

        <Route path="/Matchedevent" exact>
          <Matchedevent></Matchedevent>
        </Route>
      </Router>
    );
  }
}
export default App;
