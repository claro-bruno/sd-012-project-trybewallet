import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectInput from '../components/SelectInput';
import Button from '../components/Button';
import Header from '../components/Header';
import { actionAddExpense, fetchAPI, actionRemoveExpense } from '../actions';
import { CATEGORIES, METHOD, TABLE_HEADER, getExchanceRates } from './helpers';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currencyTag: 'BRL',
      value: '0',
      description: '',
      method: '',
      tag: '',
      currency: '',
      id: '',
      editMode: false,
    };

    this.hC = this.hC.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setExpense = this.setExpense.bind(this);
    this.handleEditedExpense = this.handleEditedExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async setExpense() {
    const { addExpense, expenses } = this.props;
    const { value, description, method, tag, currency } = this.state;
    const exchangeRates = await getExchanceRates();
    const payload = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    addExpense(payload);
    this.sumOfExpenses();
  }

  setEditedExpense() {
    const { addExpense } = this.props;
    const {
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates,
      id,
    } = this.state;
    const payload = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    addExpense(payload);
    this.sumOfExpenses();
  }

  sumOfExpenses() {
    const { expenses } = this.props;
    this.setState(() => ({
      total: expenses
        .map(
          (expense) => expense.value * expense.exchangeRates[expense.currency].ask,
        )
        .reduce((acc, currentValue) => acc + currentValue, 0),
    }));
  }

  deleteExpenses(id) {
    const { expenses, RemoveExpense } = this.props;
    const newExpensesList = expenses.filter((expense) => expense.id !== id);
    RemoveExpense(newExpensesList);
    this.setState(() => ({
      total: newExpensesList
        .map(
          (expense) => expense.value * expense.exchangeRates[expense.currency].ask,
        )
        .reduce((acc, currentValue) => acc + currentValue, 0),
    }));
  }

  editExpenses(selectedId) {
    const { expenses } = this.props;
    const {
      description,
      tag,
      method,
      value,
      currency,
      exchangeRates,
    } = expenses.find((expense) => expense.id === selectedId);
    this.setState(() => ({
      currencyTag: 'BRL',
      value,
      description,
      method,
      tag,
      currency,
      id: selectedId,
      exchangeRates,
      editMode: true,
    }));
  }

  handleEditedExpense() {
    const { id } = this.state;
    this.deleteExpenses(id);
    this.setEditedExpense();
  }

  hC(event) {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setExpense();
  }

  renderForms() {
    const { value, description, method, tag, currency, editMode } = this.state;
    const { currencies: c } = this.props;
    return (
      <form>
        <Input name="value" value={ value } handleChange={ this.hC } />
        <Input name="description" value={ description } handleChange={ this.hC } />
        <SelectInput name="currency" value={ currency } hC={ this.hC } opt={ c } />
        <SelectInput name="method" value={ method } hC={ this.hC } opt={ METHOD } />
        <SelectInput name="tag" value={ tag } hC={ this.hC } opt={ CATEGORIES } />
        {editMode ? (
          <Button handleClick={ () => { this.handleEditedExpense(); } }>
            Editar despesa
          </Button>
        ) : (
          <Button handleClick={ () => { this.handleClick(); } }>
            Adicionar despesa
          </Button>
        )}
      </form>
    );
  }

  renderTable() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {TABLE_HEADER.map((tag) => (<th key={ tag }>{tag}</th>))}
            </tr>
            {expenses.map(
              (e) => (
                <tr key={ Math.random() }>
                  <td>{e.description}</td>
                  <td>{e.tag}</td>
                  <td>{e.method}</td>
                  <td>{e.value}</td>
                  <td>{e.exchangeRates[e.currency].name}</td>
                  <td>{parseFloat(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
                  <td>
                    {parseFloat(e.value * e.exchangeRates[e.currency].ask).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <Button
                      dataTestId="delete-btn"
                      handleClick={ () => { this.deleteExpenses(e.id); } }
                    >
                      Remover despesa
                    </Button>
                    <Button
                      dataTestId="edit-btn"
                      handleClick={ () => { this.editExpenses(e.id); } }
                    >
                      Edita despesa
                    </Button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { total, currencyTag } = this.state;
    const { userEmail } = this.props;
    return (
      <div>
        <Header total={ total } tag={ currencyTag } userEmail={ userEmail } />
        {this.renderForms()}
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  addExpense: (state) => dispatch(actionAddExpense(state)),
  RemoveExpense: (expense) => dispatch(actionRemoveExpense(expense)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  RemoveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
