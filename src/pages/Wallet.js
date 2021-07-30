import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-page">
        <HeaderWallet />
      </div>
    );
  }
}

// export default connect(mapStateToProps)(Wallet);
export default Wallet;
