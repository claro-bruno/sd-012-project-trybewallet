import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchResponses } from '../actions';

class Wallet extends Component {
  constructor(props) {
    super(props);
    const { expenses } = this.props;

    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.form = this.form.bind(this);
    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatchFetches } = this.props;
    dispatchFetches();
  }

  change({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleClick() {
    const { expenses, dispatchFetches } = this.props;
    dispatchFetches(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  form() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" value={ value } id="value" onChange={ this.change } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select value={ currency } id="currency" onChange={ this.change }>
            {currencies.map((coin, index) => (
              <option key={ index } value={ coin }>
                { coin }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select value={ method } id="method" onChange={ this.change }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select value={ tag } id="tag" onChange={ this.change }>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Alimentacao">Alimentação</option>
            <option value="Saude">Saúde</option>
            <option value="Transporte">Transporte</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            value={ description }
            id="description"
            onChange={ this.change }
          />
        </label>
      </form>
    );
  }

  render() {
    const { email, expenses } = this.props;
    const total$ = expenses.reduce((acc, { exchangeRates, currency, value }) => (
      acc + (Number(exchangeRates[currency].ask) * Number(value))
    ), 0);
    return (
      <header>
        <p>
          <span>Email: </span>
          <span data-testid="email-field">{ email }</span>
        </p>
        <p>
          <span>Total expenses: </span>
          <span data-testid="total-field">{ total$ || '0' }</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
        { this.form() }
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  loading: state.wallet.loading,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetches: (state) => dispatch(fetchResponses(state)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.expenses,
  loading: PropTypes.bool,
  dispatchFetches: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
