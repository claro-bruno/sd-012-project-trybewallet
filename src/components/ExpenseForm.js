import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string, number, shape } from 'prop-types';
import { fetchCurrencies, addExpense } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies: fetchCurr } = this.props;
    fetchCurr();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    const {
      fetchCurrencies: fetchCurr,
      currencies,
      addExpense: addExp,
      expenses,
    } = this.props;
    fetchCurr();
    const id = expenses.length;
    const expenseObj = { ...this.state, id, exchangeRates: currencies };
    addExp(expenseObj);
  }

  currenciesSelect(currencies, currency) {
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          name="currency"
          id="currency-input"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((c) => <option key={ c } value={ c }>{c}</option>)}
        </select>
      </label>
    );
  }

  methodSelect(method) {
    return (
      <label htmlFor="method-input">
        Método de pagamento
        <select
          name="method"
          id="method-input"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagSelect(tag) {
    return (
      <label htmlFor="tag-input">
        Tag
        <select name="tag" id="tag-input" value={ tag } onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form action="">
        <label htmlFor="valor-input">
          Valor
          <input
            type="number"
            name="value"
            id="valor-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            name="description"
            id="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.currenciesSelect(Object.keys(currencies), currency)}
        {this.methodSelect(method)}
        {this.tagSelect(tag)}
        <button type="submit" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpenseForm.defaultProps = {
  expenses: [],
};

ExpenseForm.propTypes = {
  fetchCurrencies: func.isRequired,
  addExpense: func.isRequired,
  currencies: shape({
    USD: shape({ code: string, ask: string }),
  }).isRequired,
  expenses: arrayOf(
    shape({
      id: number,
      value: string,
      description: string,
    }),
  ),
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
