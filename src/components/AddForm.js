/* eslint-disable max-lines-per-function */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, fetchExpenses } from '../actions';
import TagInput from './TagInput';
import PaymentMethod from './PaymentMethod';

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.dispatch = this.dispatchx.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(
      { [name]: value },

    );
  }

  // Referencia função preventDefault: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  dispatch(event) {
    event.preventDefault();
    const { expenses, getExpenses } = this.props;
    const id = expenses.length;
    getExpenses({ ...this.state, id });
  }

  render() {
    const { description, value, currency, tag, method } = this.state;
    const { currencies } = this.props;
    const currencyFilter = Object.keys(currencies)
      .filter((currencyFiltered) => currencyFiltered !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            value={ value }
            name="value"
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            type="text"
            value={ description }
            id="descrição"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            name="currency"
            id="moeda"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencyFilter.map((currencySelected) => (
              <option
                value={ currencySelected.code }
                key={ currencySelected }
              >
                { currencySelected }
              </option>
            ))}
          </select>
        </label>
        <PaymentMethod value={ method } onChange={ this.handleChange } />
        <TagInput value={ tag } onChange={ this.handleChange } />
        <button type="submit" onClick={ this.dispatchx }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
  getExpenses: (expenses) => dispatch(fetchExpenses(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

AddForm.propTypes = {
  currencies: propTypes.objectOf(propTypes.string),
  getCurrency: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
