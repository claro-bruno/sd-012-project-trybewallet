import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, id, type } = this.props;

    return (
      <label htmlFor={ id } className="form-label">
        {label}
        <input
          data-testid={ id }
          id={ id }
          className="form-control"
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
