import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, datatestid, type, value, onChange, label } = this.props;

    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <input
            data-testid={ datatestid }
            type={ type }
            value={ value }
            name={ name }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
