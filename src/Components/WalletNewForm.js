import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Select from './Select';
import Input from './Input';
import { addExpense, editExpense, updateExpense,
  sumExpenses, fetchCurrencies } from '../actions';

import { valueInput, currencySelect, methodSelect,
  tagSelect, descriptionInput } from '../data/expenseForm';

class WalletNewForm extends React.Component {
  constructor(props) {
    super(props);

    this.valueInputRef = React.createRef();
    this.currencySelectRef = React.createRef();
    this.methodSelectRef = React.createRef();
    this.tagSelectRef = React.createRef();
    this.descriptionInputRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetForm() {
    const [method] = methodSelect.options;
    const [tag] = tagSelect.options;
    this.valueInputRef.current.value = '';
    this.currencySelectRef.current.value = 'USD';
    this.methodSelectRef.current.value = method;
    this.tagSelectRef.current.value = tag;
    this.descriptionInputRef.current.value = '';
  }

  returnUpdatedExpense(id, exchangeRates) {
    return {
      id,
      value: this.valueInputRef.current.value,
      currency: this.currencySelectRef.current.value,
      method: this.methodSelectRef.current.value,
      tag: this.tagSelectRef.current.value,
      description: this.descriptionInputRef.current.value,
      exchangeRates,
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const {
      isEditing,
      expenseEditing: { id, exchangeRates },
      setExpenseToStore,
      editExpenseInStore,
      updateExpenseInStore,
      setTotalExpenseInStore,
      getCurrencies } = this.props;

    if (isEditing) {
      updateExpenseInStore(this.returnUpdatedExpense(id, exchangeRates));
      setTotalExpenseInStore();
      editExpenseInStore({}, false);
    } else {
      setExpenseToStore({
        value: this.valueInputRef.current.value,
        currency: this.currencySelectRef.current.value,
        method: this.methodSelectRef.current.value,
        tag: this.tagSelectRef.current.value,
        description: this.descriptionInputRef.current.value,
        exchangeRates: await getCurrencies(),
      });
      setTotalExpenseInStore();
    }
    this.resetForm();
  }

  renderValueInput() {
    const { isEditing, expenseEditing: { value } } = this.props;
    if (isEditing) { this.valueInputRef.current.value = value; }
    return <Input inputRef={ this.valueInputRef } properties={ valueInput } />;
  }

  renderCurrencySelect() {
    const { isEditing, expenseEditing: { currency } } = this.props;
    if (isEditing) { this.currencySelectRef.current.value = currency; }
    const { currencies } = this.props;
    return (
      <Select selectRef={ this.currencySelectRef } properties={ currencySelect }>
        {currencies}
      </Select>);
  }

  renderMethodSelect() {
    const { isEditing, expenseEditing: { method } } = this.props;
    if (isEditing) { this.methodSelectRef.current.value = method; }
    return (
      <Select selectRef={ this.methodSelectRef } properties={ methodSelect }>
        {methodSelect.options}
      </Select>
    );
  }

  renderTagSelect() {
    const { isEditing, expenseEditing: { tag } } = this.props;
    if (isEditing) { this.tagSelectRef.current.value = tag; }
    return (
      <Select selectRef={ this.tagSelectRef } properties={ tagSelect }>
        {tagSelect.options}
      </Select>
    );
  }

  renderDescriptionInput() {
    const { isEditing, expenseEditing: { description } } = this.props;
    if (isEditing) { this.descriptionInputRef.current.value = description; }
    return (
      <Input inputRef={ this.descriptionInputRef } properties={ descriptionInput } />
    );
  }

  render() {
    const { isEditing } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        {this.renderValueInput()}
        {this.renderCurrencySelect()}
        {this.renderMethodSelect()}
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
  expenseEditing: state.wallet.expenseEdit.expenseEditing,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenseToStore: (expense) => dispatch(addExpense(expense)),
  editExpenseInStore: (expense, editing) => dispatch(editExpense(expense, editing)),
  updateExpenseInStore: (expense) => dispatch(updateExpense(expense)),
  setTotalExpenseInStore: () => dispatch(sumExpenses()),
  getCurrencies: () => dispatch(fetchCurrencies()),
});

WalletNewForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isEditing: PropTypes.bool.isRequired,
  expenseEditing: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  setExpenseToStore: PropTypes.func.isRequired,
  editExpenseInStore: PropTypes.func.isRequired,
  updateExpenseInStore: PropTypes.func.isRequired,
  setTotalExpenseInStore: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletNewForm);
