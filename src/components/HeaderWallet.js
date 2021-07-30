import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">
          0
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

HeaderWallet.propTypes = {
  email: string.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
