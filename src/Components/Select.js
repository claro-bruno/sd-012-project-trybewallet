import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { id, value, onChange, text, options } = this.props;
    return (
      <label htmlFor={ id }>
        {text}
        <select
          id={ id }
          value={ value }
          onChange={ onChange }
        >
          { options.map((option, index) => (
            <option
              key={ index }
              value={ id === 'currency' ? option.code : option }
            >
              {id === 'currency' ? option.code : option}
            </option>)) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ])).isRequired,
};
