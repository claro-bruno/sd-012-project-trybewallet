import React from 'react';
import Moedas from './Moedas';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <form>
          <label htmlFor="despesas">
            Valor
            <input type="text" name="despesas" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="descrição" />
          </label>
          <Moedas />
          <label htmlFor="pagamento">
            Método de pagamento
            <select name="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Tag
            <select name="categoria">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

export default Wallet;
