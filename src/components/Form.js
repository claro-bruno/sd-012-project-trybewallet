import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form className="wallet-form">
        <label className="form-items" htmlFor="field-value">
          Valor
          <input id="field-value" type="number" name="value" />
        </label>

        <label className="form-items" htmlFor="field-description">
          Descrição
          <input id="field-description" type="text" name="description" />
        </label>

        <label className="form-items" htmlFor="field-currency">
          Moeda
          <select id="field-currency" type="text" name="currency">
            {currencies.map((currency) => (
              <option key={ currency.code }>{currency.code}</option>)) }
          </select>
        </label>

        <label className="form-items" htmlFor="field-payment-method">
          Método de pagamento
          <select id="field-payment-method" type="text" name="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label className="form-items" htmlFor="field-payment-method">
          Tag
          <select id="field-payment-method" type="text" name="payment-method">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = ({
  currencies: PropTypes.array,
}).isRequired;

export default Form;
