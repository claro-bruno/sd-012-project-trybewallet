import React, { Component } from 'react';
// import { getApiCurrency } from '../actions/index';

class SelectMoedas extends Component {
  render() {
    // const { currency } = getApiCurrency;
    return (
      <label htmlFor="moedas">
        Moeda
        <select
          name="moedas"
          id="moedas"
        >
          FetchMoedas
          <option>vazio</option>
        </select>
      </label>
    );
  }
}
// currency.map(())
// fazer um map com as moedas da action
export default SelectMoedas;
