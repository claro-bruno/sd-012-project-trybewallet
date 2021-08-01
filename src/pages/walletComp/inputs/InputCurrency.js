import React from 'react';
import PropTypes from 'prop-types';

export default class InputCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
    };

    this.fetchMoney = this.fetchMoney.bind(this);
  }

  componentDidMount() {
    this.fetchMoney();
  }

  async fetchMoney() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    this.setState({ moedas: Object.keys(json).filter((moeda) => moeda !== 'USDT') });
  }

  render() {
    const { moedas } = this.state;
    const { currency, onChange } = this.props;
    return (
      <label htmlFor="coin">
        Moeda:
        <select
          name="currency"
          id="coin"
          value={ currency }
          onChange={ onChange }
        >
          { moedas.map((moeda) => <option key={ moeda }>{ moeda }</option>)}
        </select>
      </label>
    );
  }
}

InputCurrency.propTypes = {
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
