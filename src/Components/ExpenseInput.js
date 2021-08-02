/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { paymentMethods, tags } from '../data';
import { addExpense } from '../actions';

class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      description: '',
      currency: '',
      paymentMethod: '',
      tag: '',
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
    const { dispatchFormToStore } = this.props;
    dispatchFormToStore(this.state);
  }

  render() {
    const { amount, description, currency, paymentMethod, tag } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="amount">
          Valor
          <input
            id="amount"
            type="number"
            value={ amount }
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
            <option value="laranja">Laranja</option>
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select
            id="paymentMethod"
            value={ paymentMethod }
            onChange={ this.handleChange }
          >
            { paymentMethods
              .map((paymentMethoD) => (
                <option
                  key={ paymentMethoD }
                  value={ paymentMethoD }
                >
                  { paymentMethoD }
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
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFormToStore: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseInput);

ExpenseInput.propTypes = {
  dispatchFormToStore: PropTypes.func.isRequired,
};
