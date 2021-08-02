import React from 'react';
import PropTypes from 'prop-types';

function ParteForm(props) {
  const { tag, method, handleChange } = props;
  return (
    <div>
      <label htmlFor="metodopagamento">
        Método de pagamento
        <select
          id="metodopagamento"
          value={ method }
          name="method"
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        tag
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </div>
  );
}

ParteForm.propTypes = {
  method: PropTypes.string,
  tag: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ParteForm;
