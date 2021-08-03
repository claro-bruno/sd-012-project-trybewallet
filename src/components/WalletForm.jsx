import React from 'react';

class WalletForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-value">
            Valor:
            <input id="input-value" type="number" name="name" />
          </label>
          <label htmlFor="valor">
            Descrição:
            <input id="valor" type="text" name="name" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select type="text" name="currency" id="currency">
              <option> </option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select type="text" name="payment" id="payment">
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag:
            <select type="text" name="category" id="category">
              <option value="food">Alimentação</option>
              <option value="fun">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default WalletForm;
