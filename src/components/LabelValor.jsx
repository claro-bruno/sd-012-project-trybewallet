import React from 'react';
import PropTypes from 'prop-types';

function LabelValor(props) {
  const { valor, handleChange } = props;
  return (
    <label htmlFor="valor">
      Valor:
      <input
        id="valor"
        type="text"
        name="valor"
        value={ valor }
        onChange={ handleChange }
      />
    </label>
  );
}

export default LabelValor;

LabelValor.propTypes = {
  valor: PropTypes.string,
}.isRequired;
