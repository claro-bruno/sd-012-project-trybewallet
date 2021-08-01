import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import fetchCoins from '../reducers/fetchCoins';
import fetchExpense from '../reducers/fetchExpense';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',

    };
    this.onSaveData = this.onSaveData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.somTotal = this.somTotal.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  onSaveData() {
    const { saveData } = this.props;
    const { value, description, currency, method, tag } = this.state;
    saveData({ value, description, currency, method, tag });
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  somTotal() {
    const { expenses } = this.props;
    if (!expenses.length) return '0';
    const total = expenses
      .map(({ value, exchangeRates, currency }) => +exchangeRates[currency].ask * +value)
      .reduce((valueTotal, valueCurrent) => valueTotal + valueCurrent, 0);

    return total.toFixed(2);
  }

  render() {
    const { coins, registeredEmail } = this.props;
    const { value, currency, description, tag, method } = this.state;
    return (
      <>
        <Header registeredEmail={ registeredEmail } somTotal={ this.somTotal } />
        <FormExpenses
          coins={ coins }
          handleChange={ this.handleChange }
          submit={ this.onSaveData }
          currency={ currency }
          tag={ tag }
          value={ value }
          description={ description }
          method={ method }
        />
      </>
    );
  }
}

const mapStateToProps = ({ wallet, user }) => ({
  coins: wallet.currencies,
  registeredEmail: user.email,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCoins()),
  saveData: (data) => dispatch(fetchExpense(data)),
});

Wallet.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf),
  registeredEmail: PropTypes.string.isRequired,
};

Wallet.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
