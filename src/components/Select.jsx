import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      id,
      name,
      value,
      labelText,
      options,
      handleChange,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
        >
          { options.map((option, i) => (
            <option
              key={ i }
              value={ option }
            >
              { option }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
}.isrequired;

export default Select;
