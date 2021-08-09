import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin, addExpenses } from '../actions/index';
// import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.renderPayment = this.renderPayment.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: -1,
      value: '0',
      currency: '',
      exchangeRates: null,
      method: '',
      tag: '',
      description: '',
      coins: [],
    };
  }

  componentDidMount() {
    this.loadCoin();
  }

  async loadCoin() {
    const { dispatchCoin } = this.props;
    const coinData = await dispatchCoin();

    const coins = Object.keys(coinData.data);
    const filteredCoins = coins
      .filter((item) => item !== 'USDT');
    this.setState({
      coins: filteredCoins,
      exchangeRates: coinData.data,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handlerClick(e) {
    e.preventDefault();

    const { dispatchExpense, dispatchCoin } = this.props;
    await dispatchCoin(this.state);
    this.setState((state) => ({
      id: state.id + 1,
    }), () => {
      const { id, value, currency, exchangeRates, method, tag, description } = this.state;

      dispatchExpense({ id, value, currency, exchangeRates, method, tag, description });
    });
  }

  SumExpenses() {
    const { expenses } = this.props;

    return expenses
      .reduce(
        (acumulator, expense) => acumulator
      + (Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask)),
        0,
      );
  }

  renderHeader(email) {
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ (this.SumExpenses())}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }

  renderPayment() {
    return (
      <label htmlFor="method">
        Método de pagamento;
        <select id="method" name="method" onChange={ this.handleChange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderCategory() {
    return (
      <label htmlFor="tag">
        Tag;
        <select id="tag" name="tag" onChange={ this.handleChange }>
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
    const { coins } = this.state;
    return (
      <div>
        { this.renderHeader(email) }
        <div>
          { /* <Header */}
          { /* email= { email } */}
          { /* wallet= { wallet } */}
          { /* expenses= { expenses */}
        </div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              id="value"
              name="value"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency" onChange={ this.handleChange }>
              { coins
                .map((item) => <option key={ item }>{item}</option>) }
            </select>
          </label>
          { this.renderPayment() }
          { this.renderCategory() }
          <button type="submit" onClick={ this.handlerClick }>
            Adicionar Despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatchCoin: PropTypes.func.isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCoin: () => dispatch(fetchCoin()),
  dispatchExpense: (payload) => dispatch(addExpenses(payload)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  // wallet: state.wallet,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
