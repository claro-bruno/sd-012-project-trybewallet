import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  addExpense() {
    return (
      <label htmlFor="Valor">
        Valor
        <input
          id="Valor"
          placeholder="Acrescente o valor de sua despesa"
        />
      </label>
    );
  }

  addExpDescription() {
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          id="Descrição"
          placeholder="Adicione a descrição de sua despesa"
        />
      </label>
    );
  }

  addCurrency() {
    return (
      <label htmlFor="Moeda">
        Moeda
        <select
          id="Moeda"
          alt="Moeda"
        />
      </label>
    );
  }

  paymentMetod() {
    return (
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select
          id="Método de pagamento"
          alt="Método de pagamento"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  categorySelection() {
    return (
      <label htmlFor="Tag">
        Tag
        <select
          id="Tag"
          alt="Tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <form>
          {this.addExpense()}
          {this.addExpDescription()}
          {this.addCurrency()}
          {this.paymentMetod()}
          {this.categorySelection()}

        </form>
      </div>);
  }
}

export default Wallet;
