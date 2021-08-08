import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p>
          E-mail:
          <span data-testid="email-field">
            { email }
          </span>
        </p>
        <p>
          Despesa Total: R$
          <span data-testid="total-field"> 0 </span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(WalletHeader);
