import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescribe extends Component {
  render() {
    const { describeExpense, handleChange } = this.props;
    return (
      <label htmlFor="describe-expense">
        Descrição
        <input
          id="describe-expense"
          name="describeExpense"
          onChange={ handleChange }
          type="text"
          value={ describeExpense }
        />
      </label>
    );
  }
}

InputDescribe.propTypes = {
  handleChange: PropTypes.func,
  describeExpense: PropTypes.string,
}.isRequired;

export default InputDescribe;
