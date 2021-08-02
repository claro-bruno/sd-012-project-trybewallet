/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ExpenseInput from '../Components/ExpenseInput';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchFetchApi } = this.props;
    dispatchFetchApi('toUpdateCurrenciesInStore');
  }

  render() {
    return (
      <>
        <Header />
        <ExpenseInput />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchApi: (reason) => dispatch(fetchAPI(reason)),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  dispatchFetchApi: PropTypes.func.isRequired,
};
