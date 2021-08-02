import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { total, moeda } = this.state;

    return (
      <>
        <HeaderWallet email={ email } total={ total } moeda={ moeda } />
        <FormWallet />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
