import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import { actionEditExpense } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseFormEdit extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { editExpense } = this.props;
    const obj = {
      value: document.querySelector('#valor').value,
      currency: document.querySelector('#moeda').value,
      method: document.querySelector('#payment').value,
      tag: document.querySelector('#tag').value,
      description: document.querySelector('#descricao').value,
    };
    editExpense(obj);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form className="edit-form">
        <Input
          label="Valor"
          type="text"
          name="valor"
          testId="value-input"
          clss="value-input"
        />
        <Select
          label="Moeda"
          name="moeda"
          options={ currencies }
          testId="currency-input"
        />
        <Select
          label="Método de pagamento"
          name="payment"
          options={ paymentMethods }
          testId="method-input"
        />
        <Select
          label="Tag"
          name="tag"
          options={ category }
          testId="tag-input"
        />
        <Input
          label="Descrição"
          type="text"
          name="descricao"
          testId="description-input"
          clss="description-input"
        />
        <Button
          text="Editar despesa"
          name="edit"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense) => dispatch(actionEditExpense(expense)),
});

ExpenseFormEdit.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFormEdit);
