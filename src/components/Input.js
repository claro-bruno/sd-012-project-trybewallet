import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { name, label, type, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          name={ name }
          id={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  label: '',
  type: '',
  value: '',
  onChange: null,
};
