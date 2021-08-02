import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form1 from '../components/FormPart1';
import Form2 from '../components/FormPart2';
import { fetchAPIExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.fetchAPIcoins = this.fetchAPIcoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.OnbuttonSubmitExpense = this.OnbuttonSubmitExpense.bind(this);
    this.sumAllExpenses = this.sumAllExpenses.bind(this);
    this.state = {
      coins: [],
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    this.fetchAPIcoins();
  }

  sumAllExpenses() {
    const { expenses } = this.props;
    let result = 0;
    const arr = [];
    if (expenses.length === 0) return result;
    if (expenses.length >= 1) {
      expenses.map((exp) => arr.push(exp.exchangeRates[exp.currency].ask * exp.value));
      result = arr.reduce((acc, initial) => acc + initial);
    }
    return result.toFixed(2);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  OnbuttonSubmitExpense() {
    const { buttonSubmitExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    buttonSubmitExpense({ value, description, currency, method, tag });
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  async fetchAPIcoins() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const getapi = await fetch(URL);
    const getjson = await getapi.json();
    const filteredCoin = Object.keys(getjson);
    const coins = filteredCoin.filter((coin) => !coin.includes('USDT'));
    this.setState({ coins });
  }

  render() {
    const { coins, value, description, currency, method, tag } = this.state;
    const { userEmail } = this.props;
    return (
      <div>
        <nav>
          <Header userEmail={ userEmail } sumAllExpenses={ this.sumAllExpenses } />
          <Form1
            coins={ coins }
            value={ value }
            description={ description }
            currency={ currency }
            handleChange={ this.handleChange }
          />
          <Form2
            handleChange={ this.handleChange }
            method={ method }
            tag={ tag }
          />
        </nav>
        <button
          type="button"
          onClick={ this.OnbuttonSubmitExpense }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  buttonSubmitExpense: (expenses) => dispatch(fetchAPIExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;
