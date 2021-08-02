/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ExpenseInput from '../Components/ExpenseInput';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchCurrenciesToStore } = this.props;
    dispatchCurrenciesToStore();
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
  dispatchCurrenciesToStore: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  dispatchCurrenciesToStore: PropTypes.func.isRequired,
};
