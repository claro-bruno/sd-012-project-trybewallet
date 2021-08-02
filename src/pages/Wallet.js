import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectInput from '../components/SelectInput';
import Button from '../components/Button';
import { actionAddExpense, fetchAPI, actionRemoveExpense } from '../actions';
import { CATEGORIES, PAYMENT_METHOD, TABLE_HEADER } from './helpers';

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

    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setExpense = this.setExpense.bind(this);
    this.sumOfExpenses = this.sumOfExpenses.bind(this);
    this.handleEditedExpense = this.handleEditedExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  getExchanceRates() {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const rates = fetch(endpoint)
      .then((data) => data.json())
      .then((results) => results)
      .catch((err) => err);
    return rates;
  }

  async setExpense() {
    const { addExpense, expenses } = this.props;
    const { value, description, method, tag, currency } = this.state;
    const exchangeRates = await this.getExchanceRates();
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

  handleChange(event) {
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

  renderHeader() {
    const { total, currencyTag } = this.state;
    const { userEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email: ${userEmail}`}</span>
        <span data-testid="total-field">{`Despesa Total: R$ ${total}`}</span>
        <span data-testid="header-currency-field">{`Moeda: ${currencyTag}`}</span>
      </header>
    );
  }

  renderForms() {
    const { value, description, method, tag, currency, editMode } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input name="value" value={ value } handleChange={ this.handleChange }>
          Valor:
        </Input>
        <Input
          name="description"
          value={ description }
          handleChange={ this.handleChange }
        >
          Descrição:
        </Input>
        <SelectInput
          name="currency"
          value={ currency }
          handleChange={ this.handleChange }
          optionsArray={ currencies }
        >
          Moeda:
        </SelectInput>
        <SelectInput
          name="method"
          value={ method }
          handleChange={ this.handleChange }
          optionsArray={ PAYMENT_METHOD }
        >
          Método de pagamento:
        </SelectInput>
        <SelectInput
          name="tag"
          value={ tag }
          handleChange={ this.handleChange }
          optionsArray={ CATEGORIES }
        >
          Tag:
        </SelectInput>
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
              ({
                description,
                tag,
                method,
                value,
                currency,
                exchangeRates,
                id,
              }) => (
                <tr key={ Math.random() }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{parseFloat(value * exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <Button
                      dataTestId="delete-btn"
                      handleClick={ () => { this.deleteExpenses(id); } }
                    >
                      Remover despesa
                    </Button>
                    <Button
                      dataTestId="edit-btn"
                      handleClick={ () => { this.editExpenses(id); } }
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
    return (
      <div>
        {this.renderHeader()}
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
