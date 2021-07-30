import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, label, dataTestid, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        <span>{ label }</span>
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  dataTestid: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
