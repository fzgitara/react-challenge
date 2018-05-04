import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHeroes } from '../store/actions/heroes'

class Details extends Component {
  componentDidMount() {
    this.props.getHeroes()
  }
  render() {
    let hero = {
      name: '',
      roles: [],
      attribute: '',
      attack_type: '',
      img: ''
    }
    const details = this.props.heroes.data
    console.log(this.props.heroes.data)
    // eslint-disable-next-line
    details.map(data => {
      if(this.props.match.params.id === data.localized_name){
        hero = {
          name: data.localized_name,
          roles: data.roles,
          attribute: data.primary_attr,
          attack_type: data.attack_type,
          img: `http://cdn.dota2.com/apps/dota2/images/heroes/${data.name.substr(14)}_full.png`
        }
      }
    })
    if (this.props.heroes.loading) {
      return (
        <div style={{
          paddingTop: '3rem'
        }}>
          <img src="https://orig00.deviantart.net/df77/f/2013/094/8/d/loading_logofinal_by_zegerdon-d60eb1v.gif" alt=""/>
        </div>
      )
    } else {
      return (
        <div>
        <div className="container">
          <h1>{hero.name}</h1>
          <img src={hero.img} alt=""/>
          <p>Attribute: {hero.attribute}</p>
          <p>Attack Type: {hero.attack_type}</p>
          <p>Roles: {
            hero.roles.map((role, i) => {
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
)(Details);