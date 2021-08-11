import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, value, dataTestId, disableButton, handleClick, text } = this.props;

    return (
      <button
        type="button"
        name={ name }
        value={ value }
        data-testid={ dataTestId }
        disabled={ disableButton }
        onClick={ handleClick }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
}.isrequired;

export default Button;
