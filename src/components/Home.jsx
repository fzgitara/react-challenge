import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link} from "react-router-dom";
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroStats').then(response => {
      this.props.getHeroes(response.data)
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
            this.props.heroes.map(hero => {
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

const mapStateToProps = (state) => ({
  heroes: state
})

const mapDispatchToProps = (dispatch) => ({
  getHeroes: (data) => dispatch({
    type: 'READ_DATA_HEROES',
    payload: data
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);