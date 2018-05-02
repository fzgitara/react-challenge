import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

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
      <div>
        <ul>
          { 
            this.state.heroes.map(hero => {
              return (
                <li className="hero" key={hero.id}><strong>{ hero.localized_name }</strong>
                  <ol>
                    {
                      hero.roles.map((role, i) => {
                        return (
                          <li key={i}>{ role }</li>
                        )
                      })
                    }
                  </ol>
                </li>
              )
            }) 
          }
        </ul>
      </div>
    );
  }
}

export default Home;