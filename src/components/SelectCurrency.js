import React from 'react';
import PropTypes from 'prop-types';

export default class SelectCurrency extends React.Component {
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
    const { currencyValue, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          onChange={ handleChange }
          value={ currencyValue }
        >
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

SelectCurrency.propTypes = {
  currencyValue: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
