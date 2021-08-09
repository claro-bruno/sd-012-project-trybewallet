import React from 'react';
import propTypes from 'prop-types';

class SelectExpense extends React.Component {
  render() {
    const {
      text,
      name,
      options,
      onChange,
      dataTestId,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { text }
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
          data-testid={ dataTestId }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectExpense.propTypes = {
  text: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  dataTestId: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onChange: propTypes.func.isRequired,
};

export default SelectExpense;
