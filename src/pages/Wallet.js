import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Currencies from '../components/Currencies';
import ColumnHeader from '../components/ColumnHeaders';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        trybewallet
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">0</span>
        <Currencies />
        <ColumnHeader />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
