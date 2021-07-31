import React, { Component } from 'react';

class Currency extends Component {
  constructor() {
    super();

    this.state = {
      currency: [],
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
      .filter((options) => options.code !== 'USDT');
    console.log(option);
    this.setState({
      currency: option,
    });
  }

  render() {
    const { currency } = this.state;
    return (
      <label htmlFor="currency-expense">
        Moeda:
        <select name="currency" id="currency-expense">
          { currency.map((curr) => (
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

export default Currency;
