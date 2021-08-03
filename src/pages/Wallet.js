import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import { addCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  fetchCurrency() {
    const { addCurrency } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => {
        const currencies = Object.keys(response).filter((key) => key !== 'USDT');
        addCurrency(currencies);
      });
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <ExpenseForm currencies={ currencies } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => (
  { addCurrency: (currencies) => dispatch(addCurrencies(currencies)) }
);

Wallet.propTypes = {
  addCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
