import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, insertExpense } from '../actions';
import Currencies from './currencies';

class FormWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    const { insertExpenses, currencies, fetchApi } = this.props;
    fetchApi();
    insertExpenses({ ...this.state, exchangeRates: currencies });
    this.setState((state) => ({
      id: state.id + 1,
    }));
  }

  buttonFunctions() {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        Adicionar despesa
      </button>
    );
  }

  selectCurrenciesFunction() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          onChange={ this.handleChange }
          name="currency"
          data-testid="currency-input"
          className="formInputs"
        >
          <Currencies />
        </select>
      </label>
    );
  }

  selectPaymentFunction() {
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          id="payment"
          onChange={ this.handleChange }
          name="method"
          data-testid="method-input"
          className="formInputs"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectTagFunction() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          onChange={ this.handleChange }
          name="tag"
          data-testid="tag-input"
          className="formInputs"
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

  render() {
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              onChange={ this.handleChange }
              type="number"
              name="value"
              id="value"
            />
          </label>
          {this.selectCurrenciesFunction()}
          {this.selectPaymentFunction()}
          {this.selectTagFunction()}
          <label htmlFor="description">
            Descrição:
            <input
              onChange={ this.handleChange }
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
            />
          </label>
          {this.buttonFunctions()}
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurrencies()),
  insertExpenses: (state) => dispatch(insertExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);

FormWallet.propTypes = {
  fetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  insertExpenses: PropTypes.func.isRequired,
};

FormWallet.defaultProps = {
  currencies: undefined,
};
