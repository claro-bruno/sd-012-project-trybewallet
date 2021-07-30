/* eslint-disable react/prop-types */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCoins, addExpense } from '../actions';

const initialState = {
  currency: '',
  valor: 0,
  moeda: 'USD',
  pagamento: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = initialState;

    this.getCurrency = this.getCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const { coinsApi } = this.props;
    await coinsApi();
    const { wallet } = this.props;
    const currency = Object.keys(wallet);
    const formattedCurrency = currency.filter((item) => item !== 'USDT');
    this.setState({
      currency: formattedCurrency,
    });
  }

  async handleClick() {
    const { expenseAddFunc, expenses, wallet, coinsApi } = this.props;
    const { valor, tag, moeda, pagamento, description } = this.state;
    await coinsApi();
    const obj = {
      id: expenses.length,
      value: valor,
      description,
      currency: moeda,
      method: pagamento,
      tag,
      exchangeRates: wallet,
    };
    expenseAddFunc(obj);
    this.setState({
      valor: 0,
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, allExpenses } = this.props;
    const {
      currency,
      valor,
      moeda,
      pagamento,
      tag,
      description } = this.state;
    return (
      <div>
        <header>
          <p>
            E-mail:
            <span data-testid="email-field">
              { email }
            </span>
          </p>
          <p>
            Despesa Total: R$
            <span data-testid="total-field">
              { allExpenses }
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        <form>
          <label htmlFor="preco">
            Valor
            <input
              name="valor"
              value={ valor }
              onChange={ this.handleChange }
              id="preco"
              type="number"
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select
              name="moeda"
              value={ moeda }
              onChange={ this.handleChange }
              id="moeda"
            >
              { currency.length ? currency
                .map((item) => <option key={ item }>{ item }</option>) : '' }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select
              name="pagamento"
              value={ pagamento }
              onChange={ this.handleChange }
              id="pagamento"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" value={ tag } onChange={ this.handleChange } id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição
            <input
              name="description"
              value={ description }
              onChange={ this.handleChange }
              id="descricao"
              type="text"
            />
          </label>
          <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

// Wallet.propTypes = {
//   email: PropTypes.string.isRequired,
//   coinsApi: PropTypes.func.isRequired,
//   expenseAddFunc: PropTypes.func.isRequired,
//   expense: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//   })).isRequired,
// };

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet.wallet,
  expenses: state.wallet.expenses,
  allExpenses: state.wallet.expenses
    .reduce((
      acc,
      { value, currency, exchangeRates },
    ) => acc + (parseFloat(exchangeRates[currency].ask) * value), 0),
});

const mapDispatchToProps = (dispatch) => ({
  coinsApi: (state) => dispatch(getCoins(state)),
  expenseAddFunc: (state) => dispatch(addExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
