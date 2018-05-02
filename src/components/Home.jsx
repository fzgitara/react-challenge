import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link} from "react-router-dom";

class Home extends Component {
  constructor () {
    super()
    this.state = {
      heroes : []
    }
  }
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroStats').then(response => {
      this.setState({
        heroes: response.data
      })
    })
  }
  render() {
    return (
      <Router>
        <div className="home container">
          { 
            this.state.heroes.map(hero => {
              return (
                <div className="hero container" key={ hero.id }>
                <strong>{ hero.localized_name }</strong><br/>
                  <Link to={`/${hero.localized_name}`}>Details</Link>
                </div>
              )
            }) 
          }
        </div>
      </Router>
    );
  }
}

export default Home;