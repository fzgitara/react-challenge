import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home'
import Details from './components/Details'
import Forbidden from './components/Forbidden'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DOTA 2 Hero Stats</h1>
        </header>
        <div className="App-intro">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/:id" component={ Details } />
          <Route path="*" component={ Forbidden } />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
