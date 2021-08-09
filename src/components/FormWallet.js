import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, fetchApiExchange } from '../actions';

import Button from './Button';

class FormWallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      currency: 'BRL',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    const { getDataFromAPI } = this.props;
    getDataFromAPI();
  }

  submitExpense() {
    const { exchangeRates } = this.props;
    const { value, currency, description, method, tag } = this.state;
    exchangeRates({ value, currency, description, method, tag });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="tip">
          Moeda
          <select id="tip" onChange={ this.handleChange }>
            { Object.keys(currencies).map((curr) => (
              <option
                key={ curr }
              >
                { curr }
              </option>)) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Transporte</option>
            <option>Trabalho</option>
            <option>Saúde</option>
          </select>
        </label>
        <Button onClick={ () => this.submitExpense() } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDataFromAPI: (data) => dispatch(fetchApi(data)),
  exchangeRates: (data) => dispatch(fetchApiExchange(data)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormWallet.propTypes = {
  getDataFromAPI: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  exchangeRates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
