import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchAPIExpenses } from '../actions';
import WalletForm from '../components/FormWallet';
import SubmitButton from '../components/SubmitButton';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.fetchAPIcoins = this.fetchAPIcoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.OnbuttonSubmitExpense = this.OnbuttonSubmitExpense.bind(this);
    this.sumAllExpenses = this.sumAllExpenses.bind(this);
    this.state = {
      coin: [],
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
    const coin = filteredCoin.filter((c) => !c.includes('USDT'));
    this.setState({ coin });
  }

  render() {
    const { coin, value, description, currency, method, tag } = this.state;
    const { userEmail } = this.props;
    return (
      <div>
        <nav>
          <Header userEmail={ userEmail } sumAllExpenses={ this.sumAllExpenses } />
          <WalletForm
            coin={ coin }
            value={ value }
            description={ description }
            currency={ currency }
            handleChange={ this.handleChange }
            method={ method }
            tag={ tag }
          />
        </nav>
        <SubmitButton OnbuttonSubmitExpense={ this.OnbuttonSubmitExpense } />
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
