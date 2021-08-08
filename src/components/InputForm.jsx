import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="expenses">
        Valor
        <input
          id="expenses"
          name="value"
          type="number"
          min={ 0 }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default InputForm;
