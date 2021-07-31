import React from 'react';
import InputCard from './InputCard';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      disc: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, disc } = this.state;
    const { handleChange } = this;
    return (
      <form>
        <InputCard
          type="text"
          id="Valor"
          name="value"
          labelText="Valor"
          value={ value }
          onChange={ (e) => handleChange(e.target.name, e.target.value) }
        />
        <InputCard
          type="text"
          id="Descrição"
          name="Descrição"
          labelText="Descrição"
          value={ disc }
          onChange={ (e) => handleChange(e.target.name, e.target.value) }
        />
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda"> </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select id="Método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag">
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
