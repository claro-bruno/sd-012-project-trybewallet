import React from 'react';
import { payMethods, tags } from '../helpers/optionsSelects';
import Input from './Input';
import Select from './Select';

class NewExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      payMethod: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, payMethod, tag } = this.state;
    return (
      <form className="form-newExpense" method="get">
        <Input
          textLabel="Valor"
          id="value"
          type="number"
          step="0.01"
          name="value"
          onChange={ this.handleChange }
          value={ value }
        />
        <Input
          textLabel="Descrição"
          id="description"
          type="text"
          name="description"
          onChange={ this.handleChange }
          value={ description }
        />
        <Select
          textLabel="Moeda"
          id="currency"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
          options={ [] }
        />
        <Select
          textLabel="Método de pagamento"
          id="pay-method"
          name="payMethod"
          onChange={ this.handleChange }
          value={ payMethod }
          options={ payMethods }
        />
        <Select
          textLabel="Tag"
          id="tag"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
          options={ tags }
        />
      </form>
    );
  }
}

export default NewExpenses;
