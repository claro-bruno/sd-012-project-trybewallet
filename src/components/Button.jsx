import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, text, disableButton } = this.props;

    return (
      <button
        type="button"
        name={ name }
        disabled={ disableButton }
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
