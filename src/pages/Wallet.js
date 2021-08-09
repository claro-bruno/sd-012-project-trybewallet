import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { fetchCurrencies, setExpense } from '../actions';
import options from '../data';
import './Wallet.css';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.setCurrency = this.setCurrency.bind(this);
    this.updateCurrencies = this.updateCurrencies.bind(this);
    this.getExchangeRates = this.getExchangeRates.bind(this);
    this.addExchangeRates = this.addExchangeRates.bind(this);
    this.setExpense = this.setExpense.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      expense: {
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
    getCurrenciesHandler('currencies');
  }

  componentDidUpdate(prevProps, prevState) {
    const { wallet: { currencies, exchange }, setExpenseHandler } = this.props;
    const {
      expenseToAdd: { exchangeRates },
      fetchToAdd,
      readyToAdd,
      expenseToAdd,
    } = this.state;
    if (prevProps.wallet.currencies !== currencies) this.setCurrency();
    if (fetchToAdd) this.updateCurrencies();
    if ((prevState.fetchToAdd !== fetchToAdd)
        && (prevState.expenseToAdd !== expenseToAdd)) this.getExchangeRates();
    if (prevProps.wallet.exchange !== exchange) this.addExchangeRates();
    if ((prevState.exchangeRates !== exchangeRates)
        && (prevState.readyToAdd !== readyToAdd)
        && (readyToAdd === true)) {
      setExpenseHandler(expenseToAdd);
      this.resetState();
    }
  }

  setCurrency() {
    const { wallet: { currencies } } = this.props;
    this.setState((prevState) => (
      { expense: { ...prevState.expense, currency: currencies[0] } }
    ));
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

  async getExchangeRates() {
    const { getCurrenciesHandler } = this.props;
    await getCurrenciesHandler('exchange');
  }

  addExchangeRates() {
    const { wallet: { exchange } } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      expenseToAdd: { ...prevState.expenseToAdd, exchangeRates: exchange },
      readyToAdd: true,
    }));
  }

  updateCurrencies() {
    const { wallet: { currencies } } = this.props;
    const { expense } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      expenseToAdd: expense,
      fetchToAdd: false,
      expense: {
        value: '',
        currency: currencies[0],
        method: options.methods[0].name,
        tag: options.tags[0].name,
        description: '',
        exchangeRates: {},
      },
    }));
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
    const { wallet: { isFetching, currencies } } = this.props;

    const { expense: { value, currency, method, tag, description } } = this.state;

    return (
      <div className="wallet-container">
        { (isFetching || Object.values(currencies).length === 0) ? (
          <> </>
        ) : (
          <>
            <Header />
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
            {/* <Table expenses={ expenses.length > 0 ? { expenses } : false } /> */}
            <Table />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user, wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesHandler: (type) => dispatch(fetchCurrencies(type)),
  setExpenseHandler: (expense) => dispatch(setExpense(expense)),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    currency: PropTypes.string,
    currencies: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    expenses: PropTypes.arrayOf(PropTypes.shape({
      exchangeRates: PropTypes.shape(),
    })),
    exchange: PropTypes.shape(),
  }),
  getCurrenciesHandler: PropTypes.func.isRequired,
  setExpenseHandler: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  wallet: PropTypes.shape({
    currency: undefined,
    currencies: undefined,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
