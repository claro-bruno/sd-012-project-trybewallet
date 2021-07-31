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
    const { coins } = this.props;
    return (
      <>
        <Header />
        <FormExpenses coins={ coins } />
      </>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.coins,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
