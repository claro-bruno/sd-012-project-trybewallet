import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import { fetchCambioRate } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { expenses, addExpense } = this.props;
    const obj = {
      id: expenses.length,
      value: document.querySelector('#valor').value,
      currency: document.querySelector('#moeda').value,
      method: document.querySelector('#payment').value,
      tag: document.querySelector('#tag').value,
      description: document.querySelector('#descricao').value,
    };
    addExpense(obj);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <Input
          label="Valor"
          type="text"
          name="valor"
        />
        <Select
          label="Moeda"
          name="moeda"
          options={ currencies }
        />
        <Select
          label="Método de pagamento"
          name="payment"
          options={ paymentMethods }
        />
        <Select
          label="Tag"
          name="tag"
          options={ category }
        />
        <Input
          label="Descrição"
          type="text"
          name="descricao"
        />
        <Button
          text="Adicionar despesa"
          name="add"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(fetchCambioRate(expense)),
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
