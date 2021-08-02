import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Input from './Input';
import Button from './Button';

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.renderHelper = this.renderHelper.bind(this);
  }

  renderHelper(currencies) {
    const { value, currency, method, tag, onChange } = this.props;
    return (
      <>
        <Input
          type="number"
          label="Valor"
          name="value"
          id="value"
          onChange={ onChange }
          value={ value }
        />
        <Select
          label="Moeda"
          name="currency"
          id="currency"
          defaultOption="USD"
          defaultValue="USD"
          options={ currencies }
          onChange={ onChange }
          value={ currency }
        />
        <Select
          label="Método de pagamento"
          name="method"
          id="method"
          defaultOption="Dinheiro"
          defaultValue="Dinheiro"
          options={ ['Cartão de crédito', 'Cartão de débito'] }
          onChange={ onChange }
          value={ method }
        />
        <Select
          label="Tag"
          name="tag"
          id="tag"
          defaultOption="Alimentação"
          defaultValue="Alimentação"
          options={ ['Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ onChange }
          value={ tag }
        />
      </>
    );
  }

  render() {
    const { currencies, description, onChange, onClick } = this.props;
    return (
      <form>
        {this.renderHelper(currencies)}
        <Input
          type="text"
          label="Descrição"
          name="description"
          id="description"
          onChange={ onChange }
          value={ description }
        />
        <Button
          label="Adicionar despesa"
          onClick={ onClick }
        />
      </form>
    );
  }
}

export default FormAdd;

FormAdd.propTypes = {
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};
