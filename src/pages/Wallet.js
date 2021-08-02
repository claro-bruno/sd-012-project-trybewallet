import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpense from '../components/AddExpense';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <>
        <header>
          <h1>Carteira</h1>
          <div>
            <p>
              Usuário:
              {' '}
              <span data-testid="email-field">{ email }</span>
            </p>
            <p>
              Despesa Total:
              {' '}
              <span data-testid="total-field">0</span>
            </p>
            <p data-testid="header-currency-field">
              BRL
            </p>
          </div>
        </header>
        <div>
          <AddExpense />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
