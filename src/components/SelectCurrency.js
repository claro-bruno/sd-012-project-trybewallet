import React from 'react';

export default class SelectPayment extends React.Component {
  constructor() {
    super();

    this.fetchCurrencyList = this.fetchCurrencyList.bind(this);

    this.state = {
      newCurrencyList: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencyList();
  }

  async fetchCurrencyList() {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const apiJSON = await fetchAPI.json();
    const currencyList = Object.values(apiJSON);
    const newCurrencyList = currencyList
      .filter((currency) => currency.code !== 'USDT' && currency.codein !== 'BRLT');
    this.setState({
      newCurrencyList,
    });
  }

  render() {
    const { newCurrencyList } = this.state;
    return (
      <label htmlFor="currency-select">
        Moeda:
        <select name="currency-select" id="currency-select">
          {newCurrencyList.filter((currency) => currency.code !== 'USDT')
            .map((currency) => (
              <option
                key={ currency.code }
                value={ currency.code }
              >
                {currency.code}
              </option>
            ))}
        </select>
      </label>

    );
  }
}
