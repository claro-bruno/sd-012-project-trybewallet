import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addExpense, editExpense, updateExpense,
  sumExpenses,
  fetchCurrencies } from '../../actions';

import { valueInput, currencySelect, methodSelect,
  tagSelect, descriptionInput } from '../../data/expenseForm';

import Input from '../Input';
import Select from '../Select';

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: methodSelect.options[0],
  tag: tagSelect.options[0],
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

  returnUpdatedExpense(expenseEditing) {
    return {
      id: expenseEditing.id,
      value: document.querySelector('#value-input').value,
      currency: document.querySelector('#currency-input').value,
      method: document.querySelector('#method-input').value,
      tag: document.querySelector('#tag-input').value,
      description: document.querySelector('#description-input').value,
      exchangeRates: expenseEditing.exchangeRates,
    };
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
      updateExpenseInStore(this.returnUpdatedExpense(expenseEditing));
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
        properties={ valueInput }
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
        properties={ currencySelect }
        value={ currency || editCurrency }
        onChange={ this.handleChange }
      >
        {currencies}
      </Select>
    );
  }

  renderMethodSelect() {
    const { method } = this.state;
    const { isEditing,
      expenseEditing: { method: editMethod = methodSelect.options[0] } } = this.props;
    return (
      <Select
        properties={ methodSelect }
        value={ (isEditing) ? method || editMethod : method }
        onChange={ this.handleChange }
      >
        {methodSelect.options}
      </Select>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    const { isEditing,
      expenseEditing: { tag: editTag = tagSelect.options[0] } } = this.props;
    return (
      <Select
        properties={ tagSelect }
        value={ (isEditing) ? tag || editTag : tag }
        onChange={ this.handleChange }
      >
        {tagSelect.options}
      </Select>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    const { expenseEditing: { description: editDescription = '' } } = this.props;
    return (
      <Input
        properties={ descriptionInput }
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
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isEditing: PropTypes.bool.isRequired,
  expenseEditing: PropTypes.shape(PropTypes.object.isRequired),
  setExpenseToStore: PropTypes.func.isRequired,
  editExpenseInStore: PropTypes.func.isRequired,
  updateExpenseInStore: PropTypes.func.isRequired,
  setTotalExpenseInStore: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddExpenseForm);
