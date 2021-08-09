import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies, setExpenses } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: {
        value: '',
        currency: 'USD',
        method: 'dinheiro',
        tag: 'alimentacao',
        description: '',
        exchangeRates: [],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.sumTotalExpenses = this.sumTotalExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;

    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { currencies } = this.props;
    const { expense } = this.state;

    this.setState({
      expense: { ...expense, [name]: value },
    });

    if (name === 'value') {
      this.setState({
        expense: {
          ...expense,
          exchangeRates: currencies,
          [name]: value,
        },
      });
    }
  }

  handleClick() {
    const { submitExpenses, fetchCurrencies } = this.props;
    const { expense } = this.state;
    submitExpenses(expense);
    fetchCurrencies();
  }

  sumTotalExpenses() {
    const { expenses } = this.props;

    let totalExpenses = 0;
    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;
      totalExpenses += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });

    return totalExpenses.toFixed(2);
  }

  renderForm(currenciesNames) {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input name="value" id="value" type="text" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            id="description"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {currenciesNames.map((currency, index) => (
              <option key={ index } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }

  render() {
    const { email, currenciesNames } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ this.sumTotalExpenses() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        {this.renderForm(currenciesNames)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  currenciesNames: state.wallet.currenciesNames,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  submitExpenses: (expenses) => dispatch(setExpenses(expenses)),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  submitExpenses: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currenciesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
