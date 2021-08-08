import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.expenseAmount = this.expenseAmount.bind(this);
    this.expenseDescription = this.expenseDescription.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  expenseAmount() {
    return (
      <label htmlFor="input-value">
        Valor
        <input
          id="input-value"
          placeholder="adicionar valor da despesa"
        />
      </label>
    );
  }

  expenseDescription() {
    return (
      <label htmlFor="input-description">
        Descrição
        <input
          id="input-description"
          placeholder="adicionar a descrição da despesa"
        />
      </label>
    );
  }

  selectCurrency() {
    return (
      <label htmlFor="input-currency">
        Moeda
        <select
          id="input-currency"
          placeholder="adicionar em qual moeda será registrada a despesa"
        >
          REQUISISAO PARA API
        </select>
      </label>
    );
  }

  paymentMethod() {
    return (
      <label htmlFor="input-payment">
        Método de pagamento
        <select
          id="input-payment"
          placeholder="método de pagamento"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectCategory() {
    return (
      <label htmlFor="input-select-category">
        Tag
        <select
          id="input-select-category"
          placeholder="método de pagamento"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    const teste = 0;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">{`email: ${email}`}</p>
          <p data-testid="total-field">{teste}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <div>
          <form>
            {this.expenseAmount()}
            {this.expenseDescription()}
            {this.selectCurrency()}
            {this.paymentMethod()}
            {this.selectCategory()}
          </form>
        </div>
      </div>);
  }
}
const mapStateToProps = ({ user }) => ({
  email: user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
