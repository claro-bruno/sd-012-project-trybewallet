import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, string, oneOfType, number } from 'prop-types';
import AddExpensesButton from './AddExpensesButton';
import { fetchForExpense, editExpenseAct, toggleEdit } from '../actions/index';
import ExpenseTable from './ExpenseTable';
import { categoryArr } from '../componentData/index';

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
    this.state = { ...INIT_STATE };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitToExchangeRates = this.onSubmitToExchangeRates.bind(this);
    this.addEditedExpense = this.addEditedExpense.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.buttonEdit = this.buttonEdit.bind(this);
  }

  onSubmitToExchangeRates() {
    const { sendToExchangeRates } = this.props;
    const { value, description, currency, method, tag } = this.state;
    sendToExchangeRates({ value, description, currency, method, tag }); // envia para o estado global.
    this.setState({
      value: 0, description: '', currency: 'USD', method: 'Dinheiro', tag: 'Alimentação',
    });
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
        data-testid="edit-btn"
        onClick={ () => addEditedExpense(editing) }
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
    const { apiResponse, editing, addEditedExpense } = this.props;
    // const { id, value, description, currency, method, tag, exchangeRates } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="number" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moedas
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            { apiResponse.map(
              (moeda,
                index) => (<option key={ index } value={ moeda }>{moeda}</option>),
            )}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select id="categoria" name="tag" onChange={ this.handleChange }>
            {categoryArr.map((e, index) => <option key={ index }>{ e }</option>)}
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            id="descricao"
            type="text"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        { editing !== 'none' ? (this.buttonEdit(addEditedExpense, editing)) : (<AddExpensesButton onSubmitToExchangeRates={ this.onSubmitToExchangeRates } />) }
        <ExpenseTable
          handleToggleEdit={ this.handleToggleEdit }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResponse: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  sendToExchangeRates: (stateData) => dispatch(fetchForExpense(stateData)),
  editExpenseToReduce: (state, id) => dispatch(editExpenseAct(state, id)),
  toggleEditToReduce: (id) => dispatch(toggleEdit(id)),
});

ExpenseForm.propTypes = ({
  apiResponse: arrayOf(string).isRequired,
  editExpenseToReduce: func.isRequired,
  editing: oneOfType([string, number]).isRequired,
  // id: number.isRequired,
  // value: string.isRequired,
  // description: string.isRequired,
  // currency: string.isRequired,
  // method: string.isRequired,
  // tag: string.isRequired,
  // exchangeRates: objectOf(string).isRequired,
  sendToExchangeRates: func.isRequired,
  expenses: arrayOf(string).isRequired,
  toggleEditToReduce: func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
