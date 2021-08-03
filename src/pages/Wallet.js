import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { fetchCurrencies, setCurrencies, setExpense } from '../actions';
import options from '../data';
import './Wallet.css';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.setCurrency = this.setCurrency.bind(this);
    this.updateCurrencies = this.updateCurrencies.bind(this);
    this.addExchangeRates = this.addExchangeRates.bind(this);
    this.setExpense = this.setExpense.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      total: 0,
      localCurrency: {
        code: 'R$',
        symbol: 'BRL',
      },
      expense: {
        id: '',
        value: '',
        currency: '',
        method: options.methods[0].name,
        tag: options.tags[0].name,
        description: '',
        exchangeRates: {},
      },
      fetchToAdd: false,
      readyToAdd: false,
      expenseToAdd: [],
    };
  }

  componentDidMount() {
    const { getCurrenciesHandler } = this.props;
    getCurrenciesHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    const { wallet: { currencies }, setExpenseHandler } = this.props;
    const {
      expenseToAdd: { exchangeRates },
      fetchToAdd,
      readyToAdd,
      expenseToAdd,
    } = this.state;
    const defaultLength = 16;
    if ((prevProps.wallet.currencies !== currencies)
        && ((prevProps.wallet.currencies.length === 0)
        || (currencies.length === defaultLength))) {
      this.setCurrency();
    }
    if (fetchToAdd) this.updateCurrencies();
    if ((prevState.fetchToAdd !== fetchToAdd)
        && (prevState.expenseToAdd !== expenseToAdd)) {
      this.addExchangeRates();
    }
    if ((prevState.exchangeRates !== exchangeRates)
        && (prevState.readyToAdd !== readyToAdd)
        && (readyToAdd === true)) {
      setExpenseHandler(expenseToAdd);
      this.resetState();
    }
  }

  setCurrency() {
    const { wallet: { currencies, expenses }, setCurrenciesHandler } = this.props;
    const selectedsCurrencies = currencies.map((currencyFound) => currencyFound[1])
      .filter((currenciesSelecteds) => currenciesSelecteds.codein !== 'BRLT');
    const formatCurrencies = selectedsCurrencies.map((currencyFormated) => {
      const newObject = {
        name: currencyFormated.name.split('/')[0],
        code: currencyFormated.code,
        ask: currencyFormated.ask,
      };
      return newObject;
    });
    setCurrenciesHandler(formatCurrencies);
    this.setState((prevState) => ({
      ...prevState,
      expense: {
        ...prevState.expense,
        id: (expenses.length + 1),
        currency: formatCurrencies[0].code,
      },
    }));
  }

  setExpense() {
    const valueElement = document.querySelector('.wallet-value');
    const descriptionElement = document.querySelector('.wallet-description');
    const alert = 'background-color: rgb(230, 130, 130); color: rgb(220, 220, 220)';
    const { expense: { value, description } } = this.state;
    if (value !== '' && description !== '') {
      valueElement.style.cssText = '';
      descriptionElement.style.cssText = '';
      this.setState((prevState) => ({ ...prevState, fetchToAdd: true }));
    } else if (value === '' && description === '') {
      valueElement.style.cssText = alert;
      descriptionElement.style.cssText = alert;
    } else if (value === '') {
      valueElement.style.cssText = alert;
      descriptionElement.style.cssText = '';
    } else {
      descriptionElement.style.cssText = alert;
      valueElement.style.cssText = '';
    }
  }

  addExchangeRates() {
    const { wallet: { currencies } } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      expenseToAdd: { ...prevState.expenseToAdd, exchangeRates: currencies },
      readyToAdd: true,
    }));
  }

  updateCurrencies() {
    const { expense } = this.state;
    const { getCurrenciesHandler } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      expenseToAdd: expense,
      fetchToAdd: false,
      expense: {
        id: '',
        value: '',
        currency: '',
        method: options.methods[0].name,
        tag: options.tags[0].name,
        description: '',
        exchangeRates: {},
      },
    }));
    getCurrenciesHandler();
  }

  resetState() {
    this.setState((prevState) => ({
      ...prevState,
      readyToAdd: false,
    }));
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      expense: { ...prevState.expense, [name]: value },
    }));
  }

  handleClick() {
    this.setExpense();
  }

  render() {
    const { user: { email }, wallet: { isFetching, currencies } } = this.props;

    const {
      total,
      localCurrency,
      expense: { value, currency, method, tag, description },
    } = this.state;

    return (
      (isFetching ? (
        <div className="wallet-container">
          <Header email={ email } total={ total } localCurrency={ localCurrency } />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="wallet-container">
          <Header email={ email } total={ total } localCurrency={ localCurrency } />
          <Menu
            value={ value }
            currency={ currency }
            currencies={ currencies }
            method={ method }
            tag={ tag }
            description={ description }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
          />
          <Table />
        </div>
      ))
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user, wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesHandler: () => dispatch(fetchCurrencies()),
  setCurrenciesHandler: (selecteds) => dispatch(setCurrencies(selecteds)),
  setExpenseHandler: (expense) => dispatch(setExpense(expense)),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    isFetching: PropTypes.bool,
    currency: PropTypes.string,
    currencies: PropTypes.arrayOf(PropTypes.shape({
      camelName: PropTypes.string,
      name: PropTypes.string,
      code: PropTypes.string,
      ask: PropTypes.number,
    })),
    expenses: PropTypes.arrayOf(PropTypes.shape({
      exchangeRates: PropTypes.arrayOf(PropTypes.shape({
        camelName: PropTypes.string,
        name: PropTypes.string,
        code: PropTypes.string,
        ask: PropTypes.number,
      })),
    })).isRequired,
  }).isRequired,
  getCurrenciesHandler: PropTypes.func.isRequired,
  setCurrenciesHandler: PropTypes.func.isRequired,
  setExpenseHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
