import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, string, oneOfType, number } from 'prop-types';
import { fetchForExpense, editExpenseAct, toggleEdit } from '../actions/index';
import ExpenseTable from './ExpenseTable';
import { categoryArr } from '../componentData/index';
import Input from './Input';
import InputDescript from './InputDescript';
import SelectPayment from './SelectPayment';

const INIT_STATE = {
  description: '',
  tag: 'Alimentação',
  method: 'Dinheiro',
  value: '',
  currency: 'USD',
};
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = INIT_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.changeExpense = this.changeExpense.bind(this);
    this.addEditedExpense = this.addEditedExpense.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.buttonEdit = this.buttonEdit.bind(this);
    this.buttonAddExpense = this.buttonAddExpense.bind(this);
  }

  changeExpense() {
    const { sendToExchangeRates } = this.props;
    const { value, description, currency, method, tag } = this.state;
    sendToExchangeRates({ value, description, currency, method, tag }); // envia para o estado global.
    this.setState({
      value: 0, description: '', currency: 'USD', method: 'Dinheiro', tag: 'Alimentação',
    });
  }

  buttonAddExpense() {
    return (
      <button type="button" onClick={ this.changeExpense }>
        Adicionar despesa
      </button>
    );
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  addEditedExpense(id) {
    const { editExpenseToReduce } = this.props;
    editExpenseToReduce(this.state, id); // id e state usados para a lógica de edição de despesas.
    this.setState({ ...INIT_STATE });
  }

  buttonEdit(addEditedExpense, editing) {
    return (
      <button
        type="button"
        onClick={ () => this.addEditedExpense(editing) }
      >
        Editar despesa
      </button>
    );
  }

  handleToggleEdit(idT) {
    const { toggleEditToReduce, expenses } = this.props;
    const oneExpense = expenses.find((e) => e.id === idT);
    const { description, tag, method, value } = oneExpense;
    toggleEditToReduce(idT);
    this.setState({ description, tag, method, value, currency: 'CAD' });
  }

  render() {
    const { apiResponse, editing, expenses,
      addEditedExpense, changeExpense, value, description } = this.props;
    return (
      <form>
        <Input handleChange={ this.handleChange } value={ value } />
        <label htmlFor="moeda">
          Moedas
          <select
            id="moeda"
            name="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            { apiResponse.map(
              (moeda,
                index) => (<option key={ index } value={ moeda }>{moeda}</option>),
            )}
          </select>
        </label>
        <SelectPayment handleChange={ this.handleChange } />
        <label htmlFor="categoria">
          Tag
          <select
            id="categoria"
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            {categoryArr.map((e, index) => <option key={ index }>{ e }</option>)}
          </select>
        </label>
        <InputDescript handleChange={ this.handleChange } description={ description } />
        { editing === 'none'
          ? this.buttonAddExpense(changeExpense)
          : this.buttonEdit(addEditedExpense, editing)}
        <ExpenseTable
          expenses={ expenses }
          handleToggleEdit={ this.handleToggleEdit }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResponse: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editing: state.wallet.editing,
});

const mapDispatchToProps = (dispatch) => ({
  sendToExchangeRates: (stateData) => dispatch(fetchForExpense(stateData)),
  editExpenseToReduce: (state, id) => dispatch(editExpenseAct(state, id)),
  toggleEditToReduce: (id) => dispatch(toggleEdit(id)),
});

ExpenseForm.propTypes = ({
  apiResponse: arrayOf(string).isRequired,
  editExpenseToReduce: func.isRequired,
  addEditedExpense: func.isRequired,
  editing: oneOfType([string, number]).isRequired,
  sendToExchangeRates: func.isRequired,
  expenses: arrayOf(string).isRequired,
  toggleEditToReduce: func.isRequired,
  changeExpense: func.isRequired,
  value: oneOfType([string, number]).isRequired,
  description: string.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
