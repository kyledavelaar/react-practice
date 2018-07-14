import React from 'react';
import './display.scss';
import '../../App.css';
import PropTypes from 'prop-types';

const Display = (props) => {
  const {name, price, onPriceClick} = props;

  return (
    <div className="bg color">
      <h1>{name}</h1>
      <h1 onClick={() => onPriceClick(price)}>{price}</h1>
    </div>
  )

}

Display.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  onPriceClick: PropTypes.func,
}

export default Display