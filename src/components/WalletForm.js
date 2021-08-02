import React from 'react';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const apiList = await fetch('https://economia.awesomeapi.com.br/json/all');
    const a = await apiList.json();
    const currencies = Object.keys(a);
    const currenciesFiltered = currencies.filter((currency) => currency !== 'USDT');
    console.log(Object.keys(a));
    this.setState({
      currencies: currenciesFiltered,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form className="bg-light ml-5">
        <label className="ml-3" htmlFor="value">
          Valor:
          <input className="ml-1" type="text" name="value" id="value" />
        </label>
        <label className="ml-3" htmlFor="description">
          Descrição:
          <input className="ml-1" type="text" name="description" id="description" />
        </label>
        <label className="ml-3" htmlFor="currency">
          Moeda:
          <select className="ml-1" type="text" name="currency" id="currency">
            { currencies
              .map((c) => <option key={ c }>{ c }</option>) }
          </select>
        </label>
        <label className="ml-3" htmlFor="payment-method">
          Método de pagamento:
          <select className="ml-1" type="text" name="payment-method" id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label className="ml-3" htmlFor="payment-method">
          Tag:
          <select className="ml-1" type="text" name="payment-method" id="payment-method">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button">b</button>
      </form>
    );
  }
}

export default WalletForm;
