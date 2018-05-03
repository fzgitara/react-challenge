import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link} from "react-router-dom";
import store from "../store/index";

class Home extends Component {
  constructor () {
    super()
    this.state = {
      heroes : []
    }
    store.subscribe(() => {
      const newData = store.getState()
      console.log(newData)
      this.setState({
        heroes: newData
      })
    })
  }
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroStats').then(response => {
      // this.setState({
      //   heroes: response.data
      // })
      store.dispatch({
        type: 'READ_DATA_HEROES',
        payload: response.data
      })
    })
  }
  refreshPage = () => { 
    window.location.reload()
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
                <img className="imgHome" src={`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substr(14)}_full.png`} alt=""/>
                  <Link to={`/hero/${hero.localized_name}`} onClick={ this.refreshPage }>Details</Link>
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