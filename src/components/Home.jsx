import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHeroes } from '../store/actions/heroes'

class Home extends Component {
  componentDidMount() {
    this.props.getHeroes()
  }
  refreshPage = () => { 
    window.location.reload()
  }
  render() {
    if(this.props.heroes.loading){
      return (
        <div style={{
          paddingTop: '3rem'
        }}>
          <img src="https://orig00.deviantart.net/df77/f/2013/094/8/d/loading_logofinal_by_zegerdon-d60eb1v.gif" alt=""/>
        </div>
      )
    } else {
      return (
        <Router>
          <div className="home container">
            { 
              this.props.heroes.data.map(hero => {
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
}

const mapStateToProps = (state) => ({
  heroes: state.heroes
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getHeroes
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);