import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { itemName, onClick, disabled } = this.props;
    return (
      <button type="button" disabled={ disabled } onClick={ onClick }>{itemName}</button>
    );
  }
}

Button.propTypes = {
  itemName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
