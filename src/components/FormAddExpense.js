import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { newExpense } from '../actions';

class FormAddExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmit() {
    const { addExpense } = this.props;
    addExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form className="addExpenseForm">
        <Input
          labelText="Valor"
          id="value"
          handleChange={ this.handleChange }
          value={ value }
        />
        <Input
          labelText="Descrição"
          id="description"
          handleChange={ this.handleChange }
          value={ description }
        />
        <Select
          labelText="Moeda"
          id="currency"
          options={ currencies }
          handleChange={ this.handleChange }
          value={ currency }
        />
        <Select
          labelText="Método de pagamento"
          id="method"
          options={ paymentOptions }
          handleChange={ this.handleChange }
          value={ method }
        />
        <Select
          labelText="Tag"
          id="tag"
          options={ tagOptions }
          handleChange={ this.handleChange }
          value={ tag }
        />
        <button type="button" onClick={ this.handleSubmit }> Adicionar despesa </button>
      </form>
    );
  }
}

FormAddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExpense(expense) { dispatch(newExpense(expense)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpense);
