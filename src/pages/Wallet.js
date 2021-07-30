import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const despesa = 0;
    const cambio = 'BRL';
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <div>
            <p data-testid="email-field">
              {`E-mail: ${email}`}
            </p>
            <div>
              <span data-testid="total-field">
                {`Despesa Total: ${despesa} `}
              </span>
              <span data-testid="header-currency-field">
                {cambio}
              </span>
            </div>
          </div>
        </header>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
