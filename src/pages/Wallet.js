import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { fetchCurrencies, setCurrencies } from '../actions';
import options from '../data';
import './Wallet.css';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.setExchangeCurrency = this.setExchangeCurrency.bind(this);
    this.setExchangeValue = this.setExchangeValue.bind(this);
    this.convertToCamelCase = this.convertToCamelCase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      total: 0,
      localCurrency: {
        code: 'R$',
        symbol: 'BRL',
      },
      value: '',
      exchangeCurrency: '',
      exchangeValue: '',
      method: options.methods[0].name,
      tag: options.tags[0].name,
      description: '',
    };
  }

  componentDidMount() {
    const { getCurrenciesHandler } = this.props;
    getCurrenciesHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    const { wallet: { currencies } } = this.props;
    const { exchangeCurrency } = this.state;
    if ((prevProps.wallet.currencies !== currencies)
        && (prevProps.wallet.currencies.length === 0)) {
      this.setExchangeCurrency();
    }
    if (prevState.exchangeCurrency !== exchangeCurrency) {
      this.setExchangeValue();
    }
  }

  setExchangeCurrency() {
    const { wallet: { currencies }, setCurrenciesHandler } = this.props;
    const selectedsCurrencies = currencies.map((currency) => currency[1])
      .filter((selecteds) => selecteds.codein !== 'BRLT');

    const formatCurrencies = selectedsCurrencies.map((currency) => {
      const newObject = {
        currencyName: this.convertToCamelCase(currency.name),
        desc: currency.code,
        name: currency.code,
        value: currency.bid,
      };
      return newObject;
    });

    setCurrenciesHandler(formatCurrencies);

    this.setState((prevState) => ({
      ...prevState,
      exchangeCurrency: formatCurrencies[0].name,
    }));
  }

  setExchangeValue() {
    const { wallet: { currencies } } = this.props;
    const { exchangeCurrency } = this.state;
    const exchangeValue = currencies.find((currency) => {
      const result = currency.name === exchangeCurrency;
      return result;
    }).value;
    this.setState((prevState) => ({
      ...prevState,
      exchangeValue,
    }));
  }

  convertToCamelCase(input) {
    const stRegExp = '[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]';
    const ndRegExp = '|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|d+';
    const joinRegExp = `${stRegExp}+${ndRegExp}`;
    const regex = new RegExp(joinRegExp, 'g');

    let temp = input.split('/')[0];
    temp = temp.match(regex);
    let result = '';

    for (let index = 0, len = temp.length; index < len; index += 1) {
      const currentString = temp[index];
      let tempString = currentString.toLowerCase();
      if (index !== 0) {
        tempString = tempString.substr(0, 1).toUpperCase() + tempString.substr(1);
      }
      result += tempString;
    }

    result = result.normalize('NFD').replace(/[^a-zA-Zs]/g, '');
    return result;
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleClick() {
    console.log('Adicionar despesa');
  }

  render() {
    const {
      user: {
        email,
      },
      wallet: {
        isFetching,
        currencies,
      },
    } = this.props;

    const {
      total,
      localCurrency,
      value,
      exchangeCurrency,
      method,
      tag,
      description,
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
            exchangeCurrency={ exchangeCurrency }
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

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesHandler: () => dispatch(fetchCurrencies()),
  setCurrenciesHandler: (selecteds) => dispatch(setCurrencies(selecteds)),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    isFetching: PropTypes.bool,
    exchangeCurrency: PropTypes.string,
    currencies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      desc: PropTypes.string,
      value: PropTypes.string,
    })),
  }).isRequired,
  getCurrenciesHandler: PropTypes.func.isRequired,
  setCurrenciesHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
