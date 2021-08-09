import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyThunk, fetchRates } from '../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.addToExpenses = this.addToExpenses.bind(this);
    this.handleTotalValue = this.handleTotalValue.bind(this);
  }

  componentDidMount() {
    const { importedCurrencies } = this.props;
    importedCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addToExpenses() {
    const { addExpenseChange } = this.props;
    addExpenseChange(this.state);
    this.setState(INITIAL_STATE);
  }

  handleTotalValue() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const totalValue = expenses
        .reduce((accumulator, current) => accumulator
          + parseFloat(current.value) * current.exchangeRates[current.currency].ask, 0);
      return totalValue;
    }
    return 0;
  }

  renderHeader() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ user.email }</p>
        <p>Valor total</p>
        <p data-testid="total-field">{ this.handleTotalValue() }</p>
        <p>Câmbio Utilizado</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          type="text"
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {
            currencies.map((cur) => (<option key={ cur }>{ cur }</option>))
          }
        </select>
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          type="text"
          name="method"
          id="method"
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
        Tag
        <select
          type="text"
          name="tag"
          id="tag"
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

  renderForm() {
    return (
      <form onSubmit={ this.addToExpenses }>
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderCurrency() }
        { this.renderMethod() }
        { this.renderTag() }

        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderForm() }
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  importedCurrencies: (currency) => dispatch(currencyThunk(currency)),
  addExpenseChange: (payload) => dispatch(fetchRates(payload)),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string }).isRequired,

  // currencies: PropTypes.arrayOf(PropTypes.shape({ code: PropTypes.string })).isRequired,
  importedCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({ cur: PropTypes.string })).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpenseChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
// consultei o projeto do colega Luciano Almeida para fazer o requisito 8. Link do github:
// https://github.com/tryber/sd-012-project-trybewallet/pull/47/commits/444455feddcc4cc8dadfd3af97c6c87f31228ce4
