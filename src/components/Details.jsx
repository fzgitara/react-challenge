import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHeroes } from '../store/actions/heroes'

class Details extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      roles: [],
      attribute: '',
      attack_type: '',
      img: ''
    }
  }
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroStats').then(response => {
      this.props.getHeroes(response.data)
      this.getDetailHero()
    })
  }
  getDetailHero () {
    const details = this.props.heroes
    // eslint-disable-next-line
    details.map(data => {
      if(this.props.match.params.id === data.localized_name){
        this.setState({
          name: data.localized_name,
          roles: data.roles,
          attribute: data.primary_attr,
          attack_type: data.attack_type,
          img: `http://cdn.dota2.com/apps/dota2/images/heroes/${data.name.substr(14)}_full.png`
        })
      }
    })
  }
  render() {
    return (
      <div>
      <div className="container">
        <h1>{this.state.name}</h1>
        <img src={this.state.img} alt=""/>
        <p>Attribute: {this.state.attribute}</p>
        <p>Attack Type: {this.state.attack_type}</p>
        <p>Roles: {
          this.state.roles.map((role, i) => {
            return (
              <li key={i}>{role}</li>
            )
          })
        }</p>
      </div>
        <button onClick={ this.props.history.goBack }>back</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  heroes: state
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getHeroes
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);