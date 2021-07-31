import React from 'react';
import Input from '../Input';
import Select from '../Select';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { valor, descricao } = this.state;
    return (
      <form>
        <Input
          label="Valor"
          id="valor-id"
          type="text"
          name="valor"
          value={ valor }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          id="descricao-id"
          type="text"
          name="descricao"
          value={ descricao }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          id="moeda-id"
          options={ ['moeda'] }
        />
        <Select
          label="Método de pagamento"
          id="pagamento-id"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <Select
          label="Tag"
          id="categoria-id"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
      </form>
    );
  }
}

export default Form;
