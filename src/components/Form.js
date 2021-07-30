import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, fetchAPI } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      amount: '',
      description: '',
      selectedCoin: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sumbitSpent = this.sumbitSpent.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  sumbitSpent() {
    const { sendSpendig } = this.props;
    sendSpendig(this.state);
  }

  render() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies).filter((c) => c !== 'USDT');
    return (
      <form>
        <label htmlFor="amount">
          Valor
          <input type="text" name="amount" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="selectedCoin">
          Moeda
          <select name="selectedCoin" onChange={ this.handleChange }>
            { arrayCurrencies.map((c, index) => <option key={ index }>{c}</option>) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" onChange={ this.handleChange }>
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
