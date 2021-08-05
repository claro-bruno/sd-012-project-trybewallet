import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { userWallet } from '../actions';

class Wallet extends React.Component {
  render() {
    return <div><Header /></div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  wallet: (payload) => dispatch(userWallet(payload)),
});

export default connect(null, mapDispatchToProps)(Wallet);
