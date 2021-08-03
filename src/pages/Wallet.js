import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, setExpense, setTotal } from '../actions';
import Header from '../components/Header';
import FormAdd from '../components/FormAdd';
import ExpenseTable from '../components/ExpenseTable';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendTotal = this.sendTotal.bind(this);
  }

  componentDidMount() {
    const { dispatchSetCurry } = this.props;
    dispatchSetCurry();
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (expenses !== prevProps.expenses) {
      this.sendTotal();
    }
  }

  async onSubmit() {
    const { dispatchSetExpense } = this.props;
    const { id } = this.state;
    this.setState({ exchangeRates: await this.fetchCurrency() },
      () => dispatchSetExpense(this.state));
    INITIAL_STATE.id = id + 1;
    this.setState(INITIAL_STATE);
  }

  async fetchCurrency() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json())
      .then((currency) => currency);
  }

  sendTotal() {
    const { expenses, dispatchSetTotal } = this.props;
    const total = expenses.reduce((acc, spent) => {
      const { currency } = spent;
      return acc + spent.value * Number(spent.exchangeRates[currency].ask);
    }, 0);
    dispatchSetTotal(total);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <Header />
        <FormAdd
          currencies={ currencies }
          value={ value }
          description={ description }
          currency={ currency }
          method={ method }
          tag={ tag }
          onChange={ this.handleChange }
          onClick={ this.onSubmit }
        />
        <ExpenseTable
          expenses={ expenses }
          updateTotal={ this.sendTotal }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCurry: (currencies) => (dispatch(fetchCurrency(currencies))),
  dispatchSetExpense: (state) => (dispatch(setExpense(state))),
  dispatchSetTotal: (total) => (dispatch(setTotal(total))),
});

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
  }
);

Wallet.propTypes = {
  dispatchSetCurry: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchSetExpense: PropTypes.func.isRequired,
  dispatchSetTotal: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
