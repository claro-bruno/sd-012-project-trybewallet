import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import NewExpenses from '../components/NewExpense';
import ExpenseTable from '../components/ExpenseTable';
import EditExpense from '../components/EditExpense';
import WalletContainer from '../components/styledComponents/WalletContainer';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { edit, darkmode } = this.props;
    return (
      <WalletContainer darkmode={ darkmode }>
        <HeaderWallet />
        { edit ? <EditExpense /> : <NewExpenses /> }
        <main className="main-wallet">
          <ExpenseTable />
        </main>
      </WalletContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  edit: state.wallet.edit,
  darkmode: state.user.darkmode,
});

Wallet.propTypes = {
  edit: PropTypes.bool,
  darkmode: PropTypes.bool,
};

Wallet.defaultProps = {
  edit: false,
  darkmode: false,
};

export default connect(mapStateToProps)(Wallet);
