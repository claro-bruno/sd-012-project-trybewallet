import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeWallet, editWallet } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import ExpensesTable from '../components/ExpensesTable';
import fetchAll from '../services/api';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currenciesTag: [
        'USD',
        'CAD',
        'GBP',
        'ARS',
        'BTC',
        'LTC',
        'EUR',
        'JPY',
        'CHF',
        'AUD',
        'CNY',
        'ILS',
        'ETH',
        'XRP',
        'DOGE'
      ],
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
      edit: {
        isEditing: false,
        expense: {},
      },
    };
    this.currenciesToState = this.currenciesToState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getExpenseDetail = this.getExpenseDetail.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  async componentDidMount() {
    const response = await fetchAll();
    console.log(response)
    this.currenciesToState(response);
  }

  clearState() {
    this.setState({
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
      edit: {
        isEditing: false,
        expense: {},
      },
    });
  }

  getExpenseDetail() {
    const { currentValue,
      description,
      selectedCurrency,
      selectedPayment,
      selectedTag,
      edit: {
        isEditing,
        expense: {
          exchangeRates,
          id,
        },
      }
    } = this.state;
    this.clearState();
    const { expenses } = this.props;
    return isEditing ?  (
       {
        id,
        value: currentValue,
        description,
        currency: selectedCurrency,
        method: selectedPayment,
        tag: selectedTag,
        exchangeRates,
      })
      : ({
          id: expenses.length,
          value: currentValue,
          description,
          currency: selectedCurrency,
          method: selectedPayment,
          tag: selectedTag,
      });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleEdit(findId) {
    const { expenses } = this.props;
    const findExpense = expenses.find((item) => item.id === findId);
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = findExpense;
    this.setState({
      selectedTag: tag,
      selectedPayment: method,
      currentValue: value,
      description,
      selectedCurrency: currency,
      edit: {
        isEditing: true,
        expense: findExpense,
      },
    });
  }

  currenciesToState(obj) {
    delete obj.USDT;
    const currencies = Object.keys(obj);
    this.setState({ currenciesTag: currencies });
  }

  renderForm() {
    const { addExpense, editExpense } = this.props;
    const {
      currenciesTag,
      paymentMethods,
      expensesTag,
      currentValue,
      description,
      selectedCurrency,
      selectedPayment,
      selectedTag,
      edit: { isEditing },
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
          dataTestId="value-input"
        />
        <Input
          labelName="Descrição"
          name="description"
          value={ description }
          onChange={ handleChange }
          dataTestId="description-input"
        />
        <Select
          labelName="Moeda"
          value={ selectedCurrency }
          name="selectedCurrency"
          options={ currenciesTag }
          onChange={ handleChange }
          dataTestId="currency-input"
        />
        <Select
          labelName="Método de pagamento"
          value={ selectedPayment }
          name="selectedPayment"
          options={ paymentMethods }
          onChange={ handleChange }
          dataTestId="method-input"
        />
        <Select
          labelName="Tag"
          value={ selectedTag }
          name="selectedTag"
          options={ expensesTag }
          onChange={ handleChange }
          dataTestId="tag-input"
        />
        <button type="button" onClick={ () => isEditing ? editExpense(getExpenseDetail()) : addExpense(getExpenseDetail()) }>
          { isEditing ? "Editar despesa" : "Adicionar despesa" }
        </button>
      </form>);
  }

  render() {
    const { renderForm, handleEdit } = this;
    return (
      <div>
        <Header />
        { renderForm() }
        <ExpensesTable handleEdit={ handleEdit } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (value) => dispatch(changeWallet(value)),
  editExpense: (value) => dispatch(editWallet(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
