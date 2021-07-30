import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { value, description, currency, payment, tag } = this.props;
    const tags = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    const payments = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    return (
      <form>
        <label htmlFor="value">
          {value}
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          {description}
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          {currency}
          <select name="currency" id="currency">
            <option>Selecione</option>
          </select>
        </label>
        <label htmlFor="payment">
          {payment}
          <select name="payment" id="payment">
            {payments.map((paymentValue) => (
              <option key={ paymentValue } value={ paymentValue }>{paymentValue}</option>
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          {tag}
          <select name="tag" id="tag">
            {tags.map((tagValue) => (
              <option value={ tagValue } key={ tagValue }>{tagValue}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
