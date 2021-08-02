import React, { Component } from 'react';

export default class Moedas extends Component {
  render() {
    return (
      <label htmlFor="moeda">
        Moeda
        <select>
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>ARS</option>
          <option>BTC</option>
          <option>LTC</option>
          <option>JPY</option>
          <option>CHF</option>
          <option>AUD</option>
          <option>CNY</option>
          <option>ILS</option>
          <option>ETH</option>
          <option>XRP</option>
        </select>
      </label>
    );
  }
}
