import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const teste = 0;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">{`email: ${email}`}</p>
          <p data-testid="total-field">{teste}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>);
  }
}
const mapStateToProps = ({ user }) => ({
  email: user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
