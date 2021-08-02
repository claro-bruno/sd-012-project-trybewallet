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
      currency: 'BRL',
      exValue: '0',
      desc: '',
      payment: '',
      category: '',
      expenseCurrency: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setExpense = this.setExpense.bind(this);
    this.sumOfExpenses = this.sumOfExpenses.bind(this);
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
    const { exValue, desc, payment, category, expenseCurrency } = this.state;
    const exchangeRates = await this.getExchanceRates();
    const payload = {
      id: expenses.length,
      value: exValue,
      description: desc,
      currency: expenseCurrency,
      method: payment,
      tag: category,
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
    const { total, currency } = this.state;
    const { userEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email: ${userEmail}`}</span>
        <span data-testid="total-field">{`Despesa Total: R$ ${total}`}</span>
        <span data-testid="header-currency-field">{`Moeda: ${currency}`}</span>
      </header>
    );
  }

  renderForms() {
    const { exValue, desc, payment, category, expenseCurrency } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input name="exValue" value={ exValue } handleChange={ this.handleChange }>
          Valor:
        </Input>
        <Input name="desc" value={ desc } handleChange={ this.handleChange }>
          Descrição:
        </Input>
        <SelectInput
          name="expenseCurrency"
          value={ expenseCurrency }
          handleChange={ this.handleChange }
          optionsArray={ currencies }
        >
          Moeda:
        </SelectInput>
        <SelectInput
          name="payment"
          value={ payment }
          handleChange={ this.handleChange }
          optionsArray={ PAYMENT_METHOD }
        >
          Método de pagamento:
        </SelectInput>
        <SelectInput
          name="category"
          value={ category }
          handleChange={ this.handleChange }
          optionsArray={ CATEGORIES }
        >
          Tag:
        </SelectInput>
        <Button
          dataTestId="add-btn"
          loginValid={ false }
          handleClick={ () => {
            this.handleClick();
          } }
        >
          Adicionar despesa
        </Button>
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
              {TABLE_HEADER.map((tag) => <th key={ tag }>{tag}</th>)}
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
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{Math.round(exchangeRates[currency].ask * 100) / 100}</td>
                  <td>{value * exchangeRates[currency].ask}</td>
                  <td>Real</td>
                  <td>
                    <Button
                      dataTestId="delete-btn"
                      loginValid={ false }
                      handleClick={ () => {
                        this.deleteExpenses(id);
                      } }
                    >
                      Remover despesa
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
