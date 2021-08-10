import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenseValue: '',
      expenseDescription: '',
      currentExchange: '',
      paymentMethod: '',
      expenseCategory: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { expenseValue, expenseDescription, currentExchange,
      paymentMethod, expenseCategory } = this.state;
    const { array, paymentMethodsArray, expenseCategories } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          id="expenseValue"
          name="expenseValue"
          label="Valor"
          type="number"
          value={ expenseValue }
          onChange={ this.handleChange }
        />
        <Input
          name="expenseDescription"
          label="Descrição"
          type="text"
          id="expenseDescription"
          value={ expenseDescription }
          onChange={ this.handleChange }
        />
        <Select
          name="currentExchange"
          label="Moeda: "
          id="currentExchange"
          value={ currentExchange }
          onChange={ this.handleChange }
          array={ array }
        />
        <Select
          name="paymentMethod"
          label="Método de pagamento: "
          id="paymentMethod"
          value={ paymentMethod }
          onChange={ this.handleChange }
          array={ paymentMethodsArray }
        />
        <Select
          name="expenseCategory"
          label="Tag: "
          id="expenseCategory"
          value={ expenseCategory }
          onChange={ this.handleChange }
          array={ expenseCategories }
        />
        <input type="submit" value="Adicionar despesa" />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  expenseValue: PropTypes.number,
  onChange: PropTypes.func,
  expenseDescription: PropTypes.string,
  currentExchange: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.string),
  paymentMethod: PropTypes.string,
  paymentMethodsArray: PropTypes.arrayOf(PropTypes.string),
  expenseCategory: PropTypes.string,
  expenseCategories: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
