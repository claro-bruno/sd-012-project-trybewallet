import React from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class NewExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  renderInputs() {
    const {
      value,
      description,
    } = this.state;

    return (
      <div>
        <Input
          labelText="Valor:"
          name="value"
          inputType="text"
          inputPlaceholder="Valor da Compra"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Descrição:"
          name="description"
          inputType="text"
          inputPlaceholder="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderSelects() {
    const {
      currency,
      payment,
      tag,
    } = this.state;

    return (
      <div>
        <Select
          options={ [] }
          labelText="Moeda:"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          labelText="Método de pagamento:"
          name="payment"
          value={ payment }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          labelText="Tag:"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        { this.renderInputs() }
        { this.renderSelects() }
      </form>
    );
  }
}

// NewExpense.propTypes = {
//   value: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   testId: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.string.isRequired,
//   ).isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default NewExpense;
