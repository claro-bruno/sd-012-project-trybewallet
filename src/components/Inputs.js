import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Inputs extends Component {
  render() {
    const { type, name, id, value, onChange, testId, labelText } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
          data-testid={ testId }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Inputs.defaultProps = {
  labelText: '',
  testId: '',
};
