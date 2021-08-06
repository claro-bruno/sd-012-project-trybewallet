import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, dataTestId } = this.props;

    return (
      <input
        type={ type }
        name={ name }
        data-testid={ dataTestId }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  dataTestId: PropTypes.string,
}.isrequired;

export default Input;
