import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import FormWallet from '../Components/FormWallet';
// import ExpenseList from '../Components/ExpenseList';
import { fetchCurrency, fetchExpense } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClickSaveExpense = this.handleClickSaveExpense.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
      totalExpense: 0,
    };
  }

  componentDidMount() {
    const { setCurrencyStore } = this.props;
    setCurrencyStore();
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleClickSaveExpense() {
    // console.log('clicou');
    const { value, description, payment, currency, tag } = this.state;
    const { setExpenseStore } = this.props;
    setExpenseStore({ value, description, payment, currency, tag });
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { value, description, payment, currency, tag } = this.state;
    const { currencyStore } = this.props;
    return (
      <main>
        <Header />
        <FormWallet
          value={ value }
          description={ description }
          currency={ currency }
          currencyStore={ currencyStore }
          payment={ payment }
          tag={ tag }
          handleChange={ this.handleChange }
          clickSaveExpense={ this.handleClickSaveExpense }
        />
        {/* <ExpenseList /> */}
      </main>
    );
  }
}

Wallet.propTypes = {
  setCurrencyStore: PropTypes.func.isRequired,
  currencyStore: PropTypes.arrayOf(PropTypes.string).isRequired,
  setExpenseStore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencyStore: state.wallet.currencies,
  // expenses: state.wallet.expenses,
});

const mapDispatchToPtops = (dispatch) => ({
  setCurrencyStore: () => dispatch(fetchCurrency()),
  setExpenseStore: (expense) => dispatch(fetchExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToPtops)(Wallet);
