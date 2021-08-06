import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import { getCurrencies } from '../services';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const response = await getCurrencies();
    const results = Object.keys(response);
    const currenciesArr = results
      .filter((e) => e !== 'USDT')
      .map((result) => ({
        option: result,
        value: result,
      }));
    this.setState({
      currencies: currenciesArr,
    });
  }

  render() {
    const { email, expenses } = this.props;
    const { currencies } = this.state;

    const headerProps = {
      email,
      expenses,
    };

    const formProps = {
      currencies,
    };

    return (
      <>
        <WalletHeader { ...headerProps } />
        <WalletForm { ...formProps } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencies: () => dispatch(fetchCurrencies()),
// });

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.number),
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
