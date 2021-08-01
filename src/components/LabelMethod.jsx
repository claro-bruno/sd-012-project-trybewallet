import React from 'react';
import PropTypes from 'prop-types';

function LabelMethod(props) {
  const { method, handleChange } = props;
  return (
    <label htmlFor="metodo">
      Método de pagamento:
      <select
        className="form-select"
        id="metodo"
        name="method"
        value={ method }
        onChange={ handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    </label>
  );
}

export default LabelMethod;

LabelMethod.propTypes = {
  method: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
