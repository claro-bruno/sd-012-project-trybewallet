import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.renderExpenseForm = this.renderExpenseForm.bind(this);
    this.renderExpenseTable = this.renderExpenseTable.bind(this);
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          {`Email: ${email}`}
          { console.log(email) }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>

    );
  }

  renderExpenseForm() {
    return (
      <form>
        <label htmlFor="valor-input">
          Valor:
          <input id="valor-input" type="text" name="valor" />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input id="description-input" type="text" name="description" />
        </label>

        <label htmlFor="coin-select">
          Moeda
          <select id="coin-select">
            {/* <option></option> */}
          </select>
        </label>

        <label htmlFor="payment-method-select">
          Método de pagamento
          <select id="payment-method-select">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-select">
          Tag
          <select id="tag-select">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }

  renderExpenseTable() {
    return (
      <div>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>

              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
            </tr>
          </thead>
        </table>
        <button type="button">Editar/Excluir</button>
        {/* <button type="button">Excluir</button> */}

      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h3>Trybe Wallet</h3>
          { this.renderHeader() }
        </header>
        <section>
          { this.renderExpenseForm() }
          { this.renderExpenseTable() }
        </section>

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
