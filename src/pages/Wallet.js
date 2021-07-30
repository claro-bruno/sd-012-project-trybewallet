import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeWallet } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import ExpensesTable from '../components/ExpensesTable';
import fetchAll from '../services/api';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currenciesTag: [],
      currentValue: 0,
      description: '',
      selectedCurrency: 'USD',
      selectedPayment: 'Dinheiro',
      selectedTag: 'Alimentação',
      paymentMethods: [
        'Dinheiro',
        'Cartão de crédito',
        'Cartão de débito',
      ],
      expensesTag: [
        'Alimentação',
        'Lazer',
        'Trabalho',
        'Transporte',
        'Saúde',
      ],
    };
    this.currenciesToState = this.currenciesToState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getExpenseDetail = this.getExpenseDetail.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  async componentDidMount() {
    const response = await fetchAll();
    this.currenciesToState(response);
  }

  getExpenseDetail() {
    const { currentValue,
      description,
      selectedCurrency,
      selectedPayment,
      selectedTag,
    } = this.state;
    const { expenses } = this.props;

    return {
      id: expenses.length,
      value: currentValue,
      description,
      currency: selectedCurrency,
      method: selectedPayment,
      tag: selectedTag,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  currenciesToState(obj) {
    delete obj.USDT;
    const currencies = Object.keys(obj);
    this.setState({ currenciesTag: currencies });
  }

  renderForm() {
    const { addExpense } = this.props;
    const {
      currenciesTag,
      paymentMethods,
      expensesTag,
      currentValue,
      description,
    } = this.state;
    const { handleChange, getExpenseDetail } = this;
    return (
      <form>
        <Input
          labelName="Valor"
          type="number"
          name="currentValue"
          value={ currentValue }
          onChange={ handleChange }
        />
        <Input
          labelName="Descrição"
          name="description"
          value={ description }
          onChange={ handleChange }
        />
        <Select
          labelName="Moeda"
          name="selectedCurrency"
          options={ currenciesTag }
          onChange={ handleChange }
        />
        <Select
          labelName="Método de pagamento"
          name="selectedPayment"
          options={ paymentMethods }
          onChange={ handleChange }
        />
        <Select
          labelName="Tag"
          name="selectedTag"
          options={ expensesTag }
          onChange={ handleChange }
        />
        <button type="button" onClick={ () => addExpense(getExpenseDetail()) }>
          Adicionar despesa
        </button>
      </form>);
  }

  render() {
    const { renderForm } = this;
    return (
      <div>
        <Header />
        { renderForm() }
        <ExpensesTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (value) => dispatch(changeWallet(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
