import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies, setExpenses } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: {
        value: '',
        currency: 'USD',
        method: 'dinheiro',
        tag: 'alimentacao',
        description: '',
        exchangeRates: [],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sumTotalExpenses = this.sumTotalExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { currencies } = this.props;
    const { expense } = this.state;

    this.setState({
      expense: { ...expense, [name]: value },
    });

    if (name === 'value') {
      this.setState({
        expense: {
          ...expense,
          exchangeRates: currencies,
          [name]: value,
        },
      });
    }
  }

  handleClick() {
    const { submitExpenses, fetchCurrencies } = this.props;
    const { expense } = this.state;
    submitExpenses(expense);
    fetchCurrencies();
  }

  sumTotalExpenses() {
    const { expenses } = this.props;

    let totalExpenses = 0;
    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;
      totalExpenses += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });

    return totalExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ this.sumTotalExpenses() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form handleChange={ this.handleChange } handleClick={ this.handleClick } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  submitExpenses: (expenses) => dispatch(setExpenses(expenses)),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  submitExpenses: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Wallet.defaultProps = {
  currencies: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
