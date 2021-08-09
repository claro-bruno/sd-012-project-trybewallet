import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins, addExpense } from '../actions';
// Requisito copiado de Bruno Yamamoto no github
// https://github.com/tryber/sd-012-project-trybewallet/pull/29/commits/c920f96186fb838a9cf3bf8a10a4c30fcbdc2c4a
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
    this.header = this.header.bind(this);
    this.valor = this.valor.bind(this);
    this.moeda = this.moeda.bind(this);
    this.pagamento = this.pagamento.bind(this);
    this.tag = this.tag.bind(this);
    this.descricao = this.descricao.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const { coinsApi } = this.props;
    await coinsApi();
    const { wallet } = this.props;
    const keys = Object.keys(wallet[0]);
    const formattedCurrency = keys.filter((item) => item !== 'USDT');
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
      exchangeRates: wallet[0],
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

  header() {
    const { email, allExpenses } = this.props;
    return (
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
    );
  }

  valor() {
    const { valor } = this.state;
    return (
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
    );
  }

  moeda() {
    const { moeda, currency } = this.state;
    return (
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
    );
  }

  pagamento() {
    const { pagamento } = this.state;
    return (
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
    );
  }

  tag() {
    const { tag } = this.state;
    return (
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
    );
  }

  descricao() {
    const { description } = this.state;
    return (
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
    );
  }

  render() {
    return (
      <div>
        { this.header() }
        <form>
          { this.valor() }
          { this.moeda() }
          { this.pagamento() }
          { this.tag() }
          { this.descricao() }
          <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

Wallet.defaultProps = {
  wallet: [{}],
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  coinsApi: PropTypes.func.isRequired,
  expenseAddFunc: PropTypes.func.isRequired,
  allExpenses: PropTypes.number.isRequired,
  wallet: PropTypes.arrayOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  wallet: state.wallet.wallet,
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
