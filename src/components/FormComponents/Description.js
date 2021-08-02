import PropTypes from 'prop-types';
import React from 'react';

function InputDescription(props) {
  const { description, handleChange } = props;
  return (
    <form>
      <label htmlFor="Descrição">
        Descrição
        <input
          id="Descrição"
          type="text"
          value={ description }
          name="description"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

InputDescription.propTypes = {
  description: PropTypes.func,
  handleChange: PropTypes.string,
}.isRequired;

export default InputDescription;
