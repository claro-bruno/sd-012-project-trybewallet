import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescribe extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <label htmlFor="describe-expense">
        Descrição
        <input
          id="describe-expense"
          name="description"
          onChange={ handleChange }
          type="text"
          value={ description }
        />
      </label>
    );
  }
}

InputDescribe.propTypes = {
  handleChange: PropTypes.func,
  description: PropTypes.string,
}.isRequired;

export default InputDescribe;
