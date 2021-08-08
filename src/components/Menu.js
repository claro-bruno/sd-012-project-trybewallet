import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Button } from '.';
import options from '../data';

class Menu extends Component {
  render() {
    const {
      value,
      currency,
      currencies,
      method,
      tag,
      description,
      onChange,
      onClick,
    } = this.props;

    return (
      <div className="menu-container">
        <div className="menu-form">
          <Input
            labelText="Valor"
            type="number"
            className="wallet-input"
            id="wallet-value"
            name="value"
            value={ value }
            onChange={ onChange }
            required
          />
          <Select
            labelText="Moeda"
            className="wallet-input"
            id="wallet-currency"
            name="currency"
            value={ currency }
            onChange={ onChange }
            options={ currencies }
            required={ false }
          />
          <Select
            labelText="Método de pagamento"
            className="wallet-input"
            id="wallet-payment-method"
            name="method"
            value={ method }
            onChange={ onChange }
            options={ options.methods }
            required={ false }
          />
          <Select
            labelText="Tag"
            className="wallet-input"
            id="wallet-tag"
            name="tag"
            value={ tag }
            onChange={ onChange }
            options={ options.tags }
            required={ false }
          />
          <Input
            labelText="Descrição"
            type="text"
            className="wallet-input"
            id="wallet-description"
            name="description"
            value={ description }
            onChange={ onChange }
            required
          />
          <Button
            className="add-expense"
            buttonText="Adicionar despesa"
            pathname=""
            isDisable={ false }
            onClick={ onClick }
          />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.shape().isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Menu;
