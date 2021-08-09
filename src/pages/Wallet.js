import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { number } from 'yargs';

class Wallet extends React.Component {
  render() {
    const { email, despesas } = this.props;
    return (
      <header>
        <div>TrybeWallet</div>
        <div data-testid="email-field">
          E-mail:
          { email }
        </div>
        <div data-testid="total-field">
          Despesas totais:
          { despesas.reduce((acc, curr) => acc + curr, 0) }
          <div data-testid="header-currency-field">BRL</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf(number).isRequired,
};

export default connect(mapStateToProps)(Wallet);
