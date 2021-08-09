import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { string } from 'yargs';
import { fetchCurrency } from '../actions/index';

class FormExpenses extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.getCurrencies = this.getCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getCurrencies() {
    const { currencies } = this.props;
    const currkeys = Object.keys(currencies);
    return currkeys.map((currency) => {
      if (currency !== 'USDT') {
        return <option>{ currency }</option>;
      }
      return null;
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value });
  }

  async handleClick() {
    const { saveExpense, expenses } = this.props;
    await this.setState({ id: expenses.length });
    const estado = { ...this.state };
    saveExpense(estado);
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="value" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            name="description"
            id="descricao"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="currency" id="moeda" onChange={ this.handleChange }>
            { this.getCurrencies() }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="method" id="pagamento" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

FormExpenses.propTypes = {
  currencies: PropTypes.objectOf(string).isRequired,
  expenses: PropTypes.arrayOf({}).isRequired,
  saveExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(fetchCurrency(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
