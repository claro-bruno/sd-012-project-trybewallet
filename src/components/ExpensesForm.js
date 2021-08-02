import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, fetchExchangeRate } from '../actions';

/**
 * Consultei o repositório do Henrique Brito Elias para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-project-trybewallet/pull/3/commits/702598b7aa02d12398b116c94eb325d340100b39
 */

const INITIAL_STATE = {
  valueInput: 0,
  currencySelect: 'USD',
  paymentSelect: 'Dinheiro',
  tagSelect: 'Alimentação',
  descriptionInput: '',
  currencies: [],
  fetched: false,
  index: 0,
};

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.handleChange = this.handleChange.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  async componentDidMount() {
    const { fetchCurrencies } = this.props;
    await fetchCurrencies();
    this.getCurrencies();
  }

  getCurrencies() {
    const { currencies } = this.props;
    this.setState({
      currencies: [...currencies],
      fetched: true,
    });
  }

  handleSubmit() {
    const { fetchRate } = this.props;
    const {
      valueInput,
      currencySelect,
      paymentSelect,
      tagSelect,
      descriptionInput,
      index,
    } = this.state;
    fetchRate({
      id: index,
      value: valueInput,
      description: descriptionInput,
      currency: currencySelect,
      method: paymentSelect,
      tag: tagSelect,
    });
    this.setState((state) => ({
      ...INITIAL_STATE,
      index: state.index + 1,
    }), () => {
      this.getCurrencies();
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderValueInput() {
    const { valueInput } = this.state;
    return (
      <label htmlFor="expenses-value-input">
        Valor:
        <input
          data-testid="value-input"
          type="number"
          id="expenses-value-input"
          name="valueInput"
          value={ valueInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currencies, currencySelect } = this.state;
    return (
      <label htmlFor="expenses-currency-select">
        Moeda:
        <select
          data-testid="currency-input"
          id="expenses-currency-select"
          name="currencySelect"
          value={ currencySelect }
          onChange={ this.handleChange }
        >
          { currencies.map((currency) => (
            <option
              data-testid={ currency }
              key={ currency }
              value={ currency }
            >
              { currency }
            </option>
          )) }
        </select>
      </label>
    );
  }

  renderPaymentMethod() {
    const { paymentSelect } = this.state;
    return (
      <label htmlFor="expenses-payment-select">
        Método de pagamento:
        <select
          data-testid="method-input"
          id="expenses-payment-select"
          name="paymentSelect"
          value={ paymentSelect }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect() {
    const { tagSelect } = this.state;
    return (
      <label htmlFor="expenses-tag-input">
        Tag:
        <select
          data-testid="tag-input"
          id="expenses-tag-input"
          name="tagSelect"
          value={ tagSelect }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderDescriptionInput() {
    const { descriptionInput } = this.state;
    return (
      <label htmlFor="expenses-description-input">
        Descrição:
        <input
          data-testid="description-input"
          type="text"
          id="expenses-description-input"
          name="descriptionInput"
          value={ descriptionInput }
          onChange={ this.handleChange }
          autoComplete="off"
        />
      </label>
    );
  }

  render() {
    const {
      fetched,
    } = this.state;
    if (!fetched) {
      return (
        <h3>Carregando valores...</h3>
      );
    }
    return (
      <div>
        { this.renderValueInput() }
        { this.renderCurrencySelect() }
        { this.renderPaymentMethod() }
        { this.renderTagSelect() }
        { this.renderDescriptionInput() }
        <button
          type="button"
          onClick={ () => this.handleSubmit() }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
  fetchRate: (expenses) => dispatch(fetchExchangeRate(expenses)),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  fetchRate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
