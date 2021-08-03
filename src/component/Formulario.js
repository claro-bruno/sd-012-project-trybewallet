import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newExpense, newTotal } from '../actions';

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
      value: 0,
      currency: 'USD',
      method: '',
      tag: 'food',
      description: '',
      exchangeRates: {},
    };

    this.state = initialState;

    this.getMoedas = this.getMoedas.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const { Expense, Total, expenses } = this.props;
    const id = expenses.length;
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((r) => {
        this.setState({ id,
          exchangeRates: r,
        });
      }).catch(() => 'Error');
    Expense(this.state);
    const { value, exchangeRates, currency } = this.state;
    Total(parseFloat(value) * parseFloat(exchangeRates[currency].ask));
  }

  getMoedas() {
    const { moedas } = this.props;
    const lista = moedas.map((moeda) => Object.keys(moeda));
    const result = lista[0].filter((moeda) => moeda !== 'USDT')
      .map((moeda) => <option key={ moeda }>{moeda}</option>);
    return result;
  }

  HandleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clearInputs() {
    this.setState = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
    };
  }

  inputvalor(value) {
    return (
      <label htmlFor="inputValue">
        valor
        <input
          type="number"
          name="value"
          id="inputValue"
          value={ value }
          step=".01"
          onChange={ this.HandleChange }
        />
      </label>
    );
  }

  labelTag(tag) {
    return (
      <label htmlFor="tag">
        tag
        <select id="tag" name="tag" value={ tag } onChange={ this.HandleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  methodInput(method) {
    return (
      <label htmlFor="payment">
        Método de Pagamento
        <select
          id="payment"
          name="method"
          value={ method }
          onChange={ this.HandleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    return (
      <form onSubmit={ this.onSubmit }>
        {this.inputvalor(value)}
        <label htmlFor="moeda">
          moeda
          <select
            id="moeda"
            value={ currency }
            name="currency"
            onChange={ this.HandleChange }
          >
            {this.getMoedas()}
          </select>
        </label>
        {this.methodInput(method)}
        {this.labelTag(tag)}
        <label htmlFor="describe">
          Descrição
          <input
            type="text"
            name="description"
            id="describe"
            value={ description }
            onChange={ this.HandleChange }
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  Expense: (value) => dispatch(newExpense(value)),
  Total: (value) => dispatch(newTotal(value)),
});

Formulario.propTypes = ({
  moedas: PropTypes.array,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
