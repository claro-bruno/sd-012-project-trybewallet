import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { name, label, type, testId, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          name={ name }
          type={ type }
          data-testid={ testId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  testId: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  label: '',
  type: '',
  testId: '',
  value: '',
  onChange: null,
};
