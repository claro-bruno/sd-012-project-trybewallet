import React from 'react';
import { func } from 'prop-types';



class ValueInputForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="expense-value">
        Valor
        <input
          type="number"
          name="value"
          id="expense-value"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueInputForm.propTypes = {
  handleChange: func.isRequired,
};

export default ValueInputForm;
