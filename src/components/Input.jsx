import React, { Component } from 'react';
import propTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, message } = this.props;
    return (
      <div>
        <label htmlFor={ type }>
          <input
            data-testid={ ` ${message}-input ` }
            type={ type }
            placeholder={ message }
          />
        </label>
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  type: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};
