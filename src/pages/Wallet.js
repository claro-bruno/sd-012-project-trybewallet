/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import ExpenseInput from '../Components/ExpenseInput';
import ExpensesTable from '../Components/ExpensesTable';
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
        <ExpensesTable />
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
