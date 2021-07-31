import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json())
      .then((res) => {
        const todasMoedas = Object.keys(res);
        const filtrado = todasMoedas.filter((moeda) => moeda !== 'USDT');
        this.setState({
          moedas: filtrado,
        });
      });
  }

  render() {
    const { moedas } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="number" name="valor" />
        </label>
        <label htmlFor="decribe">
          Descrição:
          <input id="decribe" type="text" name="decribe" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" type="text" name="name">
            {moedas.map((moeda) => <option key={ moeda }>{ moeda }</option>)}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo" type="text" name="name">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" type="text" name="name">
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

export default Form;
