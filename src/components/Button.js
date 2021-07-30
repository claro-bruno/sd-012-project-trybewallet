import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { itemName, onClick } = this.props;
    return (
      <button type="button" onClick={ onClick }>{itemName}</button>
    );
  }
}

Button.propTypes = {
  itemName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
