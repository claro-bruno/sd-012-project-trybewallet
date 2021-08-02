import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

class FormAddExpense extends React.Component {
  render() {
    const { expense, handleChange, currencies } = this.props;
    const { value, description, currency, method, tag } = expense;
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form className="addExpenseForm">
        <Input
          labelText="Valor"
          id="value"
          handleChange={ handleChange }
          value={ value }
        />
        <Input
          labelText="Descrição"
          id="description"
          handleChange={ handleChange }
          value={ description }
        />
        <Select
          labelText="Moeda"
          id="currency"
          options={ currencies }
          handleChange={ handleChange }
          value={ currency }
        />
        <Select
          labelText="Método de pagamento"
          id="method"
          options={ paymentOptions }
          handleChange={ handleChange }
          value={ method }
        />
        <Select
          labelText="Tag"
          id="tag"
          options={ tagOptions }
          handleChange={ handleChange }
          value={ tag }
        />
      </form>
    );
  }
}

FormAddExpense.propTypes = {
  handleChange: PropTypes.func.isRequired,
  expense: PropTypes.shape({
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

export default connect(mapStateToProps)(FormAddExpense);
