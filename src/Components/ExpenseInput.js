/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { paymentMethods, tags } from '../data';
import { fetchAPI } from '../actions';

class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: paymentMethods[0],
      tag: tags[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatchFetchApi } = this.props;
    dispatchFetchApi('toAddNewExpense', this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currenciesFromStore } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currenciesFromStore.map((currencyFromStore, index) => (
              <option
                key={ index }
                value={ currencyFromStore.code }
              >
                {currencyFromStore.code}
              </option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            { paymentMethods
              .map((paymentMethod) => (
                <option
                  key={ paymentMethod }
                  value={ paymentMethod }
                >
                  { paymentMethod }
                </option>)) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            { tags
              .map((taG) => (
                <option
                  key={ taG }
                  value={ taG }
                >
                  { taG }
                </option>)) }
          </select>
        </label>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesFromStore: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchApi: (reason, expense) => dispatch(fetchAPI(reason, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseInput);

ExpenseInput.propTypes = {
  dispatchFetchApi: PropTypes.func.isRequired,
  currenciesFromStore: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ])).isRequired,
};
