import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './wallet.css';
import { thunkCurrencies, userExpense } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderMetPag = this.renderMetPag.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  // componentDidUpdate() {
  //   const { userExp } = this.props;
  //   userExp(this.state);
  // }

  handleChange(event) {
    const { name } = event.target;
    let { value } = event.target;
    if (typeof value === 'number') {
      value = value.toString();
    }
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  renderMetPag() {
    const { method } = this.state;
    return (
      <label htmlFor="met-pagamento">
        Método de pagamento&nbsp;
        <select
          type="text"
          id="met-pagamento"
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

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag&nbsp;
        <select
          type="text"
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
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

  renderMoeda() {
    const { currencyList } = this.props;
    const listaMoedas = Object.keys(currencyList);
    const currencyFiltered = listaMoedas
      .filter((item) => item !== 'USDT' && item !== 'DOGE');
    return (
      <label htmlFor="moeda">
        Moeda&nbsp;
        <select
          type="text"
          id="moeda"
          name="currency"
          onChange={ this.handleChange }
        >
          { currencyFiltered
            .map((item) => <option key={ item }>{item}</option>) }
        </select>
      </label>
    );
  }

  render() {
    const { userEmail, userExp } = this.props;
    const { value, description } = this.state;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h3 data-testid="email-field">
            Email:&nbsp;
            {userEmail}
          </h3>
          <h3 data-testid="total-field">
            Despesa total: R$ 0
          </h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form className="wallet-form">
          <label htmlFor="valor">
            Valor
            <input
              type="text"
              id="valor"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input
              type="text"
              id="descricao"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          { this.renderMoeda() }
          { this.renderTag() }
          { this.renderMetPag() }
          <button type="button" onClick={ userExp(this.state) }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencyList: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(thunkCurrencies()),
  userExp: (expense) => dispatch(userExpense(expense)),
});

Wallet.propTypes = {
  userEmail: propTypes.string.isRequired,
  fetchCurrencies: propTypes.func.isRequired,
  userExp: propTypes.func.isRequired,
  currencyList: propTypes.shape({
    code: propTypes.string,
    codein: propTypes.string,
    name: propTypes.string,
    high: propTypes.string,
    low: propTypes.string,
    varBid: propTypes.string,
    pctChange: propTypes.string,
    bid: propTypes.string,
    ask: propTypes.string,
    timestamp: propTypes.string,
    create_date: propTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
