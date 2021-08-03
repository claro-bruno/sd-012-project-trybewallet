import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Currency extends Component {
  constructor() {
    super();

    this.state = {
      currencys: [],
    };

    this.currencyList = this.currencyList.bind(this);
  }

  componentDidMount() {
    this.currencyList();
  }

  async currencyList() {
    const fethCurrency = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await fethCurrency.json();
    const currencyListOptions = Object.values(currencies);
    // console.log(currencyListOptions);
    const option = currencyListOptions
      .filter((options) => options.code !== 'USDT' && options.codein !== 'BRLT');
    // console.log(option);
    this.setState({
      currencys: option,
    });
  }

  render() {
    const { currencys } = this.state;
    const { currency, handleChange } = this.props;
    return (
      <label htmlFor="currency-expense">
        Moeda
        <select
          id="currency-expense"
          name="currency"
          onChange={ handleChange }
          value={ currency }
        >
          { currencys.map((curr) => (
            <option
              key={ curr.code }
              value={ curr.code }
            >
              { curr.code }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  currency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Currency;
