import React from 'react';

export default class InputMoney extends React.Component {
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
    return (
      <label htmlFor="coin">
        Moeda:
        <select name="moeda" id="coin">
          { moedas.map((moeda) => <option key={ moeda }>{ moeda }</option>)}
        </select>
      </label>
    );
  }
}
