import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'api' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    this.setState({ value: target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="number"
              id="valor"
            />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input
              type="text"
              id="descrição"
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select value={ value } id="moeda" onChange={ this.handleChange }>
              <option value="api" id="moeda">API</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select value={ value } id="pagamento" onChange={ this.handleChange }>
              <option value="dinheiro" id="pagamento">Dinheiro</option>
              <option value="cartão_de_crédito" id="pagamento">Cartão de crédito</option>
              <option value="cartão_de_débito" id="pagamento">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select value={ value } id="tag" onChange={ this.handleChange }>
              <option value="alimentação" id="tag">Alimentação</option>
              <option value="lazer" id="tag">Lazer</option>
              <option value="trabalho" id="tag">Trabalho</option>
              <option value="transporte" id="tag">Transporte</option>
              <option value="saúde" id="tag">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
