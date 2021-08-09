import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/Wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <header className="header">
          <h1>TRYBE LOGO</h1>
          <p data-testid="email-field">{ email }</p>
          <p>
            Despesa Total: R$
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isrequired;

export default connect(mapStateToProps)(Wallet);
