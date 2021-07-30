import React from 'react';

function FormWallet() {
  return (
    <form>
      <label htmlFor="valor">
        Valor:
        <input id="valor" type="text" name="valor" />
      </label>
      <label htmlFor="desc">
        Descrição:
        <input id="desc" type="text" name="descrição" />
      </label>
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda" name="moeda">
          {null}
        </select>
      </label>
      <label htmlFor="metodo">
        Método de pagamento:
        <select id="metodo" name="metodo">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="moeda">
        Tag:
        <select id="moeda" name="moeda">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    </form>
  );
}

export default FormWallet;
