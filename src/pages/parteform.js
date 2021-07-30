import React from 'react';

function ParteForm() {
  return (
    <div>
      <label htmlFor="metodopagamento">
        Método de pagamento
        <select id="metodopagamento">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        tag
        <select id="tag">
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

export default ParteForm;
