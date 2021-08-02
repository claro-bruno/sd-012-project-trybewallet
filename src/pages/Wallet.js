import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">{` ${email} `}</span>
          Despesa Total: R$
          <span data-testid="total-field">{0}</span>
          <span data-testid="header-currency-field"> BRL</span>
        </p>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps)(Wallet);
