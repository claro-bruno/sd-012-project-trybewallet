import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputAutoSized from './InputAutoSized';
import Select from './Select';
import { addExpense as addExpenseAction, fetchAPI } from '../actions';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: '',
      payment: '',
      tag: '',
      description: '',
      index: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getOptions(option) {
    const pagamentos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    if (option === 'pagamento') return pagamentos;
    if (option === 'tag') return tags;
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { addExpense, getCurrencies, currencies, addValue } = this.props;
    const { value, currency, payment, tag, description, index } = this.state;
    getCurrencies();

    const expense = {
      id: index,
      value,
      description,
      currency,
      method: payment,
      tag,
      exchangeRates: currencies,
    };
    addExpense(expense);
    const conversor = Object.values(currencies)
      .find(({ code }) => code === currency);
    addValue(value * conversor.ask);

    this.setState((prevState) => ({
      ...prevState,
      index: prevState.index + 1,
    }));
  }

  render() {
    const { value, currency, payment, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <form
        className="row container ml-auto mr-auto align-items-center mt-3"
        onSubmit={ (event) => {
          event.preventDefault();
          this.handleSubmit();
        } }
      >
        <InputAutoSized
          label="Valor: "
          id="value"
          type="number"
          value={ value }
          handleChange={ this.handleChange }
        />
        <Select
          label="Moeda: "
          id="currency"
          options={ Object.keys(currencies).filter((curr) => curr !== 'USDT') }
          value={ currency }
          handleChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento: "
          id="payment"
          options={ this.getOptions('pagamento') }
          value={ payment }
          handleChange={ this.handleChange }
        />
        <Select
          label="Tag: "
          id="tag"
          options={ this.getOptions('tag') }
          value={ tag }
          handleChange={ this.handleChange }
        />
        <InputAutoSized
          label="Descrição: "
          id="description"
          type="text"
          value={ description }
          handleChange={ this.handleChange }
        />
        <button type="submit" className="btn btn-primary">Adicionar despesa</button>
      </form>);
  }
}

FormWallet.propTypes = {
  currencies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])),
  ]).isRequired,
  addExpense: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (event) => dispatch(addExpenseAction(event)),
  getCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
