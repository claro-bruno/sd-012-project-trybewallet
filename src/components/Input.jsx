import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      id,
      type,
      name,
      labelText,
      dataTestId,
      handleChange,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          id={ id }
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  dataTestId: PropTypes.string,
}.isrequired;

export default Input;
