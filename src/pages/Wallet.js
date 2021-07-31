import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormAddExpense from '../components/FormAddExpense';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <div>TrybeWallet</div>
        <Header email={ email } />
        <FormAddExpense />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
