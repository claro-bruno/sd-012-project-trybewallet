import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectCurrency from './SelectCurrency';
import Select from './Select';
import Button from './Button';
import { fetchAPI, addExpenseToStore } from '../actions';

class WalletHeader extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      payment: 'Dinheiro',
      category: 'Alimentação',
      currency: 'USD',
    };

    this.handleChange = this.handleChange.bind(this);
    this.newExpense = this.newExpense.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  updateState() {
    this.setState((prevState) => ({
      ...prevState,
      id: prevState.id + 1,
    }));
  }

  newExpense(currencies) {
    const { value, currency } = this.state;
    const { ask } = currencies.find((currCurrency) => currCurrency.code === currency);
    this.updateState();
    return {
      expenseDetails: this.state,
      exchangeRates: [...currencies],
      total: value * ask,
    };
  }

  render() {
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies = [], addExpense } = this.props;
    const { value, description, category, payment, currency } = this.state;
    return (
      <div>
        <Input
          title="Valor"
          name="value"
          value={ value }
          placeholder="Insira o Valor"
          onChange={ this.handleChange }
        />
        <Input
          title="Descrição"
          name="description"
          value={ description }
          placeholder="Insira a Descrição"
          onChange={ this.handleChange }
        />
        <Select
          title="Método de pagamento"
          name="payment"
          value={ payment }
          options={ paymentOptions }
          onChange={ this.handleChange }
        />
        <Select
          title="Tag"
          name="category"
          value={ category }
          options={ tagOptions }
          onChange={ this.handleChange }
        />
        <SelectCurrency
          title="Moeda"
          name="currency"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Button
          name="Adicionar Despesa"
          onClick={ () => addExpense(this.newExpense(currencies)) }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
  addExpense: (expense) => dispatch(addExpenseToStore(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletHeader.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
    ),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletHeader);
