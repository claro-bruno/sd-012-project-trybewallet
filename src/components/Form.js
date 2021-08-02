import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, fetchAPI } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.sumbitSpent = this.sumbitSpent.bind(this);
    this.getCoins = this.getCoins.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
    this.getCoins();
  }

  async getCoins() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    this.setState({
      exchangeRates: data,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  sumbitSpent() {
    const { sendSpendig } = this.props;

    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;

    const newExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    sendSpendig(newExpense);

    const newId = id + 1;
    this.setState({
      id: newId,
    });
  }

  render() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies).filter((c) => c !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            id="descricao"
            type="text"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            { arrayCurrencies.map((c, index) => <option key={ index }>{c}</option>) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.sumbitSpent }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  sendSpendig: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  sendSpendig: (payload) => dispatch(addExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
