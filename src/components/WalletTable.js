import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletTable extends Component {
  render() {
    return (
      <table>
        <thead />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
