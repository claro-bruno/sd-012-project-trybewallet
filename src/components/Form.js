import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Currencies from './Currencies';
import Select from './select';
import actionGastos from '../actions/actionGastos';
import usandoAfetch from '../actions/fetchAction';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { setaGastos, fetchApi } = this.props;
    fetchApi();
    const { currencies, expenses } = this.props;
    const { state } = this;
    const { value, currency } = state;
    const total = Number(currencies[currency].ask) * Number(value);
    setaGastos({
      id: expenses.length,
      ...state,
      exchangeRates: currencies,
    }, total);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currency, method, tag, value, description } = this.state;
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input
            id="Valor"
            type="text"
            value={ value }
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input
            value={ description }
            id="Descrição"
            type="text"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select
            value={ currency }
            id="Moeda"
            name="currency"
            onChange={ this.handleChange }
          >
            <Currencies />
          </select>
        </label>
        <Select onChange={ this.handleChange } tag={ tag } method={ method } />
        <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
      </form>

    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setaGastos: (state, total) => dispatch(actionGastos(state, total)),
  fetchApi: () => dispatch(usandoAfetch()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  setaGastos: PropTypes.func.isRequired,
  fetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.shape(
    {},
  ).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
