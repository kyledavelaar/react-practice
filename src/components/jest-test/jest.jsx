import React from 'react';
import {Motion, spring} from 'react-motion';


const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  hoverStyleDefault = {x: spring(10)}
  hoverStyle = {x: spring(20)}

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <Motion 
        style={this.state.class === 'hovered' ? this.hoverStyle : this.hoverStyleDefault}
      >
        {({x}) => (
          <a
            className={this.state.class}
            href={this.props.page || '#'}
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}
            style={{fontSize: `${x}px`,}}
          >
            {this.props.children}
          </a>
        )}
      </Motion>
    );
  }
}