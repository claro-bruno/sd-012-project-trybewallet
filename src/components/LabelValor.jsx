import React from 'react';
import PropTypes from 'prop-types';

function LabelValor(props) {
  const { value, handleChange } = props;
  return (
    <label htmlFor="valor">
      Valor:
      <input
        id="valor"
        type="text"
        name="valor"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

export default LabelValor;

LabelValor.propTypes = {
  value: PropTypes.string,
}.isRequired;
