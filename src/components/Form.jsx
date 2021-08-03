import React, { Component } from 'react';
import Input from './Input';
import PaymentMethod from './PaymentMethod';
import Tag from './Tag';
import Currencies from './Currencies';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, description } = this.state;
    return (
      <form>
        <Input
          type="number"
          placeholder="Despesa"
          id="valueInput"
          labelTxt="Valor"
          value={ valor }
          name="valor"
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          placeholder="Detalhes da despesa"
          id="descriptionInput"
          labelTxt="Descrição"
          value={ description }
          name="description"
          onChange={ this.handleChange }
        />
        <Currencies />
        <PaymentMethod />
        <Tag />
      </form>
    );
  }
}

export default Form;
