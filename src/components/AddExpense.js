import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionAddExpense } from '../actions';

class AddExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { expenses, addExpense } = this.props;

    addExpense(this.state, expenses.length);

    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  renderValueInput() {
    const { value } = this.state;

    return (
      <label htmlFor="value">
        Valor
        <input
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;

    return (
      <label htmlFor="description">
        Descrição
        <input
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currency } = this.state;
    const { currencies } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {
            currencies
              .map((currencyName) => <option key={ currencyName }>{currencyName}</option>)
          }
        </select>
      </label>
    );
  }

  renderMethodSelect() {
    const { method } = this.state;

    return (
      <label htmlFor="method">
        Método de pagamento
        <select
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

  renderCategorySelect() {
    const { tag } = this.state;

    return (
      <label htmlFor="tag">
        Tag
        <select
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

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          { this.renderValueInput() }
          { this.renderDescriptionInput() }
          { this.renderCurrencySelect() }
          { this.renderMethodSelect() }
          { this.renderCategorySelect() }
          <button type="submit">Adicionar Despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state, id) => dispatch(actionAddExpense(state, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};
