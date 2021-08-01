import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/FormWallet';
import fetchExpense from '../servises/fetchExpense';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      moedas: [''],
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitExpense = this.onSubmitExpense.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  onSubmitExpense() {
    const { submitExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    submitExpense({ value, description, currency, method, tag });
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  totalExpenses() {
    const { expenses } = this.props;
    let total = 0;
    const values = [];
    if (expenses.length === 0) {
      return total;
    }
    if (expenses.length === 1) {
      total = expenses[0].exchangeRates[expenses[0].currency].ask * expenses[0].value;
    }
    if (expenses.length > 1) {
      expenses.map((expense) => values.push(parseFloat(
        expense.exchangeRates[expense.currency].ask * expense.value,
      )));
      total = values.reduce((vt, vc) => vt + vc);
    }
    return total.toFixed(2);
  }

  async fetchMoedas() {
    const fetchMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await fetchMoedas.json();
    const moedasKeys = Object.keys(json);
    const moedas = moedasKeys.filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  render() {
    const { email } = this.props;
    const { currency, moedas, value, description, tag, method } = this.state;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <span data-testid="total-field">{ this.totalExpenses() }</span>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <FormWallet
          moedas={ moedas }
          handleChange={ this.handleChange }
          value={ value }
          description={ description }
          currency={ currency }
          method={ method }
          tag={ tag }
          submit={ this.onSubmitExpense }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  submitExpense: (state) => dispatch(fetchExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
