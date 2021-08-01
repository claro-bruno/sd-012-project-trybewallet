import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import NewExpenses from '../components/NewExpense';
import ExpenseTable from '../components/ExpenseTable';
import EditExpense from '../components/EditExpense';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { edit } = this.props;
    return (
      <div className="wallet-page">
        <HeaderWallet />
        { edit ? <EditExpense /> : <NewExpenses /> }
        <main className="main-wallet">
          <ExpenseTable />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  edit: state.wallet.edit,
});

Wallet.propTypes = {
  edit: PropTypes.bool,
};

Wallet.defaultProps = {
  edit: false,
};

export default connect(mapStateToProps)(Wallet);
