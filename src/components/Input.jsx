import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, placeholder, testId, id, labelTxt, value, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        { labelTxt }
        <input
          type={ type }
          placeholder={ placeholder }
          data-testid={ testId }
          id={ id }
          value={ value }
          onChange={ onChange }
          name={ name }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelTxt: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  testId: '',
  labelTxt: '',
  value: '',
  name: '',
  onChange: () => {},
};

export default Input;
