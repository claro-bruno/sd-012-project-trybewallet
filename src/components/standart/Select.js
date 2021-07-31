import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      props: {
        value,
        name,
        handleChange,
        labelText,
        options,
      },
    } = this;

    const NUMBER_RAMDOM = 1000;

    return (
      <label htmlFor={ name }>
        { labelText }
        <select id={ name } name={ name } value={ value } onChange={ handleChange }>
          { options.map((option) => (
            <option key={ Math.random() * NUMBER_RAMDOM } value={ option.value }>
              { option.text }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

const { string, array } = PropTypes;
Select.propTypes = {
  value: string.isRequired,
  name: string.isRequired,
  handleChange: string.isRequired,
  labelText: string.isRequired,
  options: array.isRequired,
}.isRequired;

export default Select;
