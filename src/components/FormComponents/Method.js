import PropTypes from 'prop-types';
import React from 'react';

function InputMethod(props) {
  const { method, handleChange } = props;
  return (
    <form>
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select
          id="Método de pagamento"
          value={ method }
          name="method"
          onChange={ handleChange }
        >
          <option>{null}</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    </form>
  );
}

InputMethod.propTypes = {
  handleChange: PropTypes.func,
  method: PropTypes.string,
}.isRequired;

export default InputMethod;
