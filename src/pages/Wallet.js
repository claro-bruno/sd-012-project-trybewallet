import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <section>
        <header>
          <h1>TRYBE WALLET</h1>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">Despesa Total: 0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </section>
    );
  }
}

const mapStateToPros = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToPros)(Wallet);
