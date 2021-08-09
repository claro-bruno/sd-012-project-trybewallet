import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, text, disableButton, handleClick } = this.props;

    return (
      <button
        type="button"
        name={ name }
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
