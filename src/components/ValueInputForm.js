import React from 'react';
import PropTypes from 'prop-types';

class ValueInputForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="value-input">
        Valor
        <input
          type="number"
          name="value-input"
          id="value-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueInputForm.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default ValueInputForm;
