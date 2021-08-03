import React, { Component } from 'react';

class Currencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      currency: 'USD',
    };
    this.getCurrencies = this.getCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    delete response.USDT;
    this.setState({
      currencies: Object.keys(response),
    });
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      currency: value,
    });
  }

  render() {
    const { currencies } = this.state;
    const { currency } = this.state;
    return (
      <label htmlFor="moedas">
        Moeda
        <select value={ currency } onChange={ this.handleChange } id="moedas">
          { currencies.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
    );
  }
}

export default Currencies;
