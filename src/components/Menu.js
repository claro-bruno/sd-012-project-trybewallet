import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Input, Select, Button } from '.';
import options from '../data';

class Menu extends Component {
  render() {
    const { value, exchangeCurrency, method, tag, description, onChange } = this.props;

    return (
      <div className="menu-container">
        <Input
          labelText="Valor"
          type="number"
          className="wallet-input"
          id="wallet-value"
          name="value"
          value={ value }
          onChange={ onChange }
        />
        <Select
          labelText="Moeda"
          className="wallet-input"
          id="wallet-exchange-currency"
          name="exchangeCurrency"
          value={ exchangeCurrency }
          onChange={ onChange }
          options={ options.currencies }
        />
        <Select
          labelText="Método de pagamento"
          className="wallet-input"
          id="wallet-payment-method"
          name="method"
          value={ method }
          onChange={ onChange }
          options={ options.methods }
        />
        <Select
          labelText="Tag"
          className="wallet-input"
          id="wallet-tag"
          name="tag"
          value={ tag }
          onChange={ onChange }
          options={ options.tags }
        />
        <Input
          labelText="Descrição"
          type="text"
          className="wallet-input"
          id="wallet-description"
          name="description"
          value={ description }
          onChange={ onChange }
        />
        <Button
          className="add-expense"
          buttonText="Adicionar despesa"
        />
      </div>
    );
  }
}

Menu.propTypes = {
  value: PropTypes.string.isRequired,
  exchangeCurrency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default Menu;
