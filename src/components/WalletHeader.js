import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class WalletHeader extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
        <p
          data-testid="total-field"
        >
          0
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps, null)(WalletHeader);
