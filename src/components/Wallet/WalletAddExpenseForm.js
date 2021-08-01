import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addExpense,
  editExpense,
  updateExpense,
  sumExpenses,
  fetchCurrencies } from '../../actions';
import Input from '../Input';
import Select from '../Select';

const methodArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: methodArray[0],
  tag: tagArray[0],
  description: '',
};

class WalletAddExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const {
      isEditing,
      expenseEditing,
      setExpenseToStore,
      editExpenseInStore,
      updateExpenseInStore,
      setTotalExpenseInStore,
      getCurrencies } = this.props;

    if (isEditing) {
      updateExpenseInStore({
        ...expenseEditing,
        ...this.state,
      });
      setTotalExpenseInStore();
      editExpenseInStore({}, false);
    } else {
      setExpenseToStore({
        ...this.state,
        exchangeRates: await getCurrencies(),
      });
      setTotalExpenseInStore();
    }

    this.setState((prevState) => ({
      ...prevState,
      ...INITIAL_STATE,
    }));
  }

  renderValueInput() {
    const { value } = this.state;
    const { isEditing, expenseEditing: { value: editValue = '' } } = this.props;
    return (
      <Input
        labelText="Valor"
        id="value-input"
        name="value"
        type="number"
        value={ (isEditing) ? value || editValue : value }
        onChange={ this.handleChange }
      />
    );
  }

  renderCurrencySelect() {
    const { currency } = this.state;
    const { currencies, expenseEditing: { currency: editCurrency = 'USD' } } = this.props;
    return (
      <Select
        labelText="Moeda"
        id="currency-input"
        name="currency"
        value={ currency || editCurrency }
        onChange={ this.handleChange }
      >
        {currencies}
      </Select>
    );
  }

  renderPaymentMethodSelect() {
    const { method } = this.state;
    const { isEditing,
      expenseEditing: { method: editMethod = methodArray[0] } } = this.props;
    return (
      <Select
        labelText="Método de pagamento"
        id="method-input"
        name="method"
        value={ (isEditing) ? method || editMethod : method }
        onChange={ this.handleChange }
      >
        {methodArray}
      </Select>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    const { expenseEditing: { tag: editTag = tagArray[0] } } = this.props;
    return (
      <Select
        labelText="Tag"
        id="tag-input"
        name="tag"
        value={ tag || editTag }
        onChange={ this.handleChange }
      >
        {tagArray}
      </Select>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    const { expenseEditing: { description: editDescription = '' } } = this.props;
    return (
      <Input
        labelText="Descrição"
        id="description-input"
        name="description"
        type="text"
        value={ description || editDescription }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { isEditing } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        {this.renderValueInput()}
        {this.renderCurrencySelect()}
        {this.renderPaymentMethodSelect()}
        {this.renderTagSelect()}
        {this.renderDescriptionInput()}
        {
          (isEditing)
            ? <button type="submit">Editar despesa</button>
            : <button type="submit">Adicionar despesa</button>
        }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isEditing: state.wallet.expenseEdit.isEditing,
  expenseEditing: state.wallet.expenseEdit.editingExpense,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenseToStore: (expense) => dispatch(addExpense(expense)),
  editExpenseInStore: (expense, editing) => dispatch(editExpense(expense, editing)),
  updateExpenseInStore: (expense) => dispatch(updateExpense(expense)),
  setTotalExpenseInStore: () => dispatch(sumExpenses()),
  getCurrencies: () => dispatch(fetchCurrencies()),
});

WalletAddExpenseForm.defaultProps = {
  expenseEditing: {
    id: 0,
    description: '',
    tag: '',
    method: '',
    value: '',
    currency: '',
    exchangeRates: {},
  },
};

WalletAddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  isEditing: PropTypes.bool.isRequired,
  expenseEditing: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  }),
  setExpenseToStore: PropTypes.func.isRequired,
  editExpenseInStore: PropTypes.func.isRequired,
  updateExpenseInStore: PropTypes.func.isRequired,
  setTotalExpenseInStore: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddExpenseForm);
