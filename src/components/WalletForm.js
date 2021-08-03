import React from 'react';

const APIURL = 'https://economia.awesomeapi.com.br/json/all';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: {},
    };
  }

  componentDidMount() {
    this.API();
  }

  async API() {
    const response = await fetch(APIURL);
    const data = await response.json();
    console.log(data);
    this.setState({ lista: data });
  }

  render() {
    const { lista } = this.state;
    const moedas = Object.keys(lista);
    const coinFilter = moedas.filter((moeda) => moeda !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {coinFilter.map((moeda) => <option key={ moeda }>{moeda}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="type">
          Tag:
          <select id="type">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
