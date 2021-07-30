import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputCurrency extends Component {
  render() {
    const { currencies, currency, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" value={ currency } onChange={ handleChange }>
          {currencies
            ? currencies.map((item, index) => (
              <option value={ item } key={ index }>{item}</option>))
            : <option>erro</option>}
        </select>
      </label>
    );
  }
}

InputCurrency.propTypes = {
  currency: PropTypes.string,
  currencies: PropTypes.array,
  handleChange: PropTypes.func,
}.isRequired;
