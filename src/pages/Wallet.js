import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange(target) {
    this.setState({ currencies: target.currencies });
  }

  async fetchCurrencies() {
    const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchCurrencies.json();
    const currencySelect = Object.keys(response);
    this.setState({
      currencies: currencySelect,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <Header />
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { currencies.map((currency) => {
              if (currency !== 'USDT') {
                return (
                  <option key={ currency }>
                    { currency}
                  </option>);
              } return null;
            })}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select value={ currencies } id="pagamento" onChange={ this.handleChange }>
            <option value="dinheiro" id="pagamento">Dinheiro</option>
            <option value="cartão_de_crédito" id="pagamento">Cartão de crédito</option>
            <option value="cartão_de_débito" id="pagamento">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select value={ currencies } id="tag" onChange={ this.handleChange }>
            <option value="alimentação" id="tag">Alimentação</option>
            <option value="lazer" id="tag">Lazer</option>
            <option value="trabalho" id="tag">Trabalho</option>
            <option value="transporte" id="tag">Transporte</option>
            <option value="saúde" id="tag">Saúde</option>
          </select>
        </label>
        <Table />
      </div>
    );
  }
}

export default Wallet;
