import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import NewExpenses from '../components/NewExpense';
import ExpenseTable from '../components/ExpenseTable';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-page">
        <HeaderWallet />
        <NewExpenses />
        <main className="main-wallet">
          <ExpenseTable />
        </main>
      </div>
    );
  }
}

export default Wallet;
