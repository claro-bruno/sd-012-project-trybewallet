// toDo: passar para arrow function [ ]
// toDo: colocar moeda para fora do return, ficar a parte [ ]
import React, { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, addExpense } from '../actions';

const INICIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
};

class CostForm extends Component {
  constructor(props) {
    super(props);
    this.state = INICIAL_STATE;
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTagSelection = this.renderTagSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getCurrencies, addObj } = this.props;
    getCurrencies();
    addObj(this.state);
    this.setState(INICIAL_STATE);
  }

  renderMethod() {
    const { method } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="payment-method-input">
        Método de pagamento:
        <select
          onChange={ (event) => this.setState({ method: event.target.value }) }
          value={ method }
          id="payment-method-input"
        >
          {methods.map((item, index) => (
            <option key={ index } value={ item }>{item}</option>))}
        </select>
      </label>
    );
  }

  renderTagSelection() {
    const { tag } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag-input">
        Tag:
        <select
          onChange={ (event) => this.setState({ tag: event.target.value }) }
          value={ tag }
          id="tag-input"
        >
          {/* <option value="" disabled> </option> */}
          {tags.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency } = this.state;
    const { currenciesNames } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            id="value-input"
            value={ value }
            onChange={ (event) => this.setState({ value: event.target.value }) }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            id="description-input"
            value={ description }
            onChange={ (event) => this.setState({ description: event.target.value }) }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            onChange={ (event) => this.setState({ currency: event.target.value }) }
            value={ currency }
            id="currency-input"
          >
            { currenciesNames && currenciesNames.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            ))}
          </select>
        </label>
        { this.renderMethod()}
        { this.renderTagSelection()}
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currenciesNames: state.wallet.currenciesNames,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  addObj: (stateItens) => dispatch(addExpense(stateItens)),
});

CostForm.propTypes = {
  getCurrencies: func.isRequired,
  addObj: func.isRequired,
  currenciesNames: arrayOf(string),
};

CostForm.defaultProps = {
  currenciesNames: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(CostForm);
