import React, { Component } from 'react';
import axios from 'axios'

class Details extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      roles: [],
      attribute: '',
      attack_type: ''
    }
  }
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroStats').then(response => {
      response.data.map(data => {
        if(this.props.match.params.id === data.localized_name){
          this.setState({
            name: data.localized_name,
            roles: data.roles,
            attribute: data.primary_attr,
            attack_type: data.attack_type
          })
        }
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.name}</h1>
        <p>Attribute: {this.state.attribute}</p>
        <p>Attack Type: {this.state.attack_type}</p>
        <p>Roles: {
          this.state.roles.map((role, i) => {
            return (
              <li key="i">{role}</li>
            )
          })
        }</p>
      </div>
    );
  }
}

export default Details;