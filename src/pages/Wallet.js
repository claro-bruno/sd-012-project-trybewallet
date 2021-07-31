import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import fetchCoins from '../reducers/fetchCoins';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    const { coins, registeredEmail } = this.props;

    return (
      <>
        <Header registeredEmail={ registeredEmail } />
        <FormExpenses coins={ coins } />
      </>
    );
  }
}

const mapStateToProps = ({ wallet, user }) => ({
  coins: wallet.currencies,
  registeredEmail: user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  registeredEmail: PropTypes.string.isRequired,
};

// Wallet.defaultProps = {
//   coins: [],
// };

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
