import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { /* expenseFormAction, */ exchangeRatesThunk } from '../actions/index';
// import Header from '../component/Header';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      id: 0,
      ...INITIAL_STATE,
    };
    this.fetchCoinsOptions = this.fetchCoinsOptions.bind(this);
    this.handleClickAddExpenses = this.handleClickAddExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCoinsOptions();
  }

  async fetchCoinsOptions() {
    const URL_API = 'https://economia.awesomeapi.com.br/json/all';
    const request = await fetch(URL_API);
    const data = await request.json();
    const arrayCoins = Object.keys(data);
    this.setState({
      coins: arrayCoins,
    });
  }

  handleClickAddExpenses() {
    const { setExchangeRatesThunk } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    setExchangeRatesThunk({ id, value, description, currency, method, tag });
    this.setState((prevState) => ({
      id: prevState.id + 1,
      ...INITIAL_STATE,
    }));
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  labelValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="valor-input">
        Valor:
        <input
          id="valor-input"
          type="text"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  labelDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  labelCoinSelect() {
    const { coins } = this.state;
    return (
      <label htmlFor="coin-select">
        Moeda
        <select id="coin-select" name="currency" onChange={ this.handleChange }>
          { coins.map((coin) => {
            if (coin === 'USDT') return '';
            return (
              <option key={ coin }>
                { coin }
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  labelMethodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="payment-method-select">
        Método de pagamento
        <select
          id="payment-method-select"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  labelTagSelect() {
    const tagsArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { tag } = this.state;
    return (
      <label htmlFor="tag-select">
        Tag
        <select
          id="tag-select"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          { tagsArray.map((e) => (
            <option key={ e }>{e}</option>
          ))}
        </select>
      </label>

    );
  }

  totalExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((total, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return (total + ask * value);
    }, 0).toFixed(2);
    return (totalExpenses);
  }

  renderHeader() {
    const { email } = this.props;

    return (
      <div>
        <p data-testid="email-field">
          {`Email: ${email}`}
        </p>
        {/* <p data-testid="total-field">0</p> */}
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">
          Total:
          { this.totalExpenses() }
        </p>
      </div>

    );
  }

  renderAddExpensesBtn() {
    return (
      <button
        type="submit"
        onClick={ this.handleClickAddExpenses }
      >
        Adicionar despesa
      </button>
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
          {/* <Header /> */}
          { this.renderHeader() }
        </header>
        <section>
          <form>
            { this.labelValueInput() }
            { this.labelDescriptionInput() }
            { this.labelCoinSelect() }
            { this.labelMethodSelect() }
            { this.labelTagSelect() }
          </form>
          { this.renderAddExpensesBtn() }
          { this.renderExpenseTable() }
        </section>

      </div>
    );
  }
}
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  setExchangeRatesThunk: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  setExchangeRatesThunk: (expensesObj) => dispatch(exchangeRatesThunk(expensesObj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
