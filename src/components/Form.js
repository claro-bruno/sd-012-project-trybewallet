import React from 'react';

const requisiçaoAPI = 'https://economia.awesomeapi.com.br/json/all';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      listaDeMoedas: {},
    };
  }

  componentDidMount() {
    this.API();
  }

  async API() {
    const response = await fetch(requisiçaoAPI);
    const data = await response.json();
    console.log(data);
    this.setState({ listaDeMoedas: data });
  }

  render() {
    const { listaDeMoedas } = this.state;
    const moedas = Object.keys(listaDeMoedas);
    const filtroDeMoedas = moedas.filter((moeda) => moeda !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input type="text" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            {filtroDeMoedas.map((moeda) => <option key={ moeda }>{moeda}</option>)}
          </select>
        </label>
        <label htmlFor="metodo-de-pagamento">
          Método de pagamento:
          <select id="metodo-de-pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag:
          <select id="categoria">
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

export default Forms;
