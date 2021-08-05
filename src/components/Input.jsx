import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, datatestid, type, value, onChange, label, id } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          {label}
          <input
            data-testid={ datatestid }
            type={ type }
            value={ value }
            id={ id }
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
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
