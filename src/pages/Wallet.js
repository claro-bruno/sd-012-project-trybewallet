import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './wallet.css';
import { updateExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moneyInitials: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      totalExpense: 0,
    };

    this.getMoneyInitials = this.getMoneyInitials.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.totalExpense = this.totalExpense.bind(this);
  }

  componentDidMount() {
    this.getMoneyInitials();
  }

  async getEconomy() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  async getMoneyInitials() {
    const economy = await this.getEconomy();
    // console.log(economy);
    const moneyInitials = Object.keys(economy).filter((initials) => initials !== 'USDT');
    this.setState({ moneyInitials });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  totalExpense() {
    const { expenses } = this.props;
    const currencies = expenses.map((expense) => [
      expense.currency,
      parseFloat(expense.value),
    ]);
    const exchanges = Object.entries(expenses[expenses.length - 1].exchangeRates);
    const exchangesToConvert = [];
    currencies.forEach((currency) => {
      exchanges.forEach((exchange) => {
        if (exchange[0] === currency[0]) {
          exchangesToConvert.push(exchange);
        }
      });
    });
    const valueConverted = [];
    exchangesToConvert.forEach((exchange, index) => {
      if (exchange[0] === currencies[index][0]) {
        valueConverted.push(exchange[1].ask * currencies[index][1]);
      }
    });
    const result = valueConverted.reduce((acc, curr) => acc + curr, 0);
    this.setState({ totalExpense: result });
  }

  async handleFormSubmit() {
    const {
      value,
      currency,
      description,
      tag,
      method,
    } = this.state;
    const { addExpense, expenses } = this.props;

    const economy = await this.getEconomy();

    let id = 0;
    if (expenses.length >= 1) {
      id = expenses[expenses.length - 1].id + 1;
    }

    const newExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: economy,
    };
    addExpense(newExpense);
    this.totalExpense();
  }

  renderFormHelper() {
    return (
      <div className="form-section-helper">
        <label htmlFor="tag-id">
          Tag:
          <select
            className="form-item"
            id="tag-id"
            name="tag"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description-id">
          Descrição:
          <input
            type="text"
            id="description-id"
            name="description"
            className="form-item"
            onChange={ this.handleChange }
          />
        </label>
        <button onClick={ this.handleFormSubmit } type="button">Adicionar despesa</button>
      </div>
    );
  }

  renderForm() {
    const { moneyInitials } = this.state;
    return (
      <form className="form-section">
        <label htmlFor="value-id">
          Valor:
          <input
            type="number"
            id="value-id"
            name="value"
            className="form-item-value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-id">
          Moeda:
          <select
            className="form-item-currency"
            aria-label="Moeda"
            name="currency"
            id="currency-id"
            onChange={ this.handleChange }
          >
            { moneyInitials.map((init) => <option key={ init }>{ init }</option>) }
          </select>
        </label>
        <label htmlFor="method-id">
          Método de pagamento:
          <select
            className="form-item"
            id="method-id"
            name="method"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        { this.renderFormHelper() }
      </form>
    );
  }

  render() {
    const { email } = this.props;
    const { totalExpense } = this.state;

    return (
      <section>
        <header className="header-section">
          <h1>TRYBE WALLET</h1>
          <section className="header-info-section">
            <div>
              <p data-testid="email-field">{ `Email: ${email}` }</p>
            </div>
            <div className="expense-info">
              <p data-testid="total-field">{ `Despesa Total ${totalExpense}` }</p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </section>
        </header>
        { this.renderForm() }
      </section>
    );
  }
}

const mapStateToPros = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (value) => dispatch(updateExpenses(value)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToPros, mapDispatchToProps)(Wallet);
