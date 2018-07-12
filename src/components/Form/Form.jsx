import React, { Component } from 'react';

import Input from '../Input';
import './form.css';

export default class Form extends Component {
  state = {
    favorites: {
      chocolate: false,
      jelly: false,
    },
    request: '',
    gotcha: false,
  }
  
  render() {
    return (
      <div className="container">
        {this.props.children}
          <Input 
            type="text"
            value={this.state.request}
            name='request'
            onChange={(e) => this.onInputChange(e)}
          />
          <Input
            type="checkbox"
            value={this.state.gotcha}
            name="gotcha"
            onChange={(e) => this.onInputChange(e)}
          />
          { this.renderFavorites() }
      </div>
    )
  }

  renderFavorites() {
    const favs = this.state.favorites;
    return Object.keys(favs).map((name, i) => {
      return (
          <Input
            key={i} 
            type="checkbox"
            name={name}
            value={favs.name}
            onChange={(e) => this.onInputChange(e)}
          />
      )
    })
  }

  onInputChange(e) {
    let name = e.target.name;
    let val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log('val', val)
    if (e.target.type === 'checkbox' && name !== 'gotcha') {
      this.setState({
        favorites: Object.assign({}, this.state.favorites, {[name]: val})
      })
    } else {
      this.setState({
        [name]: val
      })
    }
  }



}