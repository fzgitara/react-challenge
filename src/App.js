import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'

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
          <Route exact path="/" component={ Home } />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
