import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <section>
        <header className="header-section">
          <h1>TRYBE WALLET</h1>
          <section className="header-info-section">
            <div>
              <p data-testid="email-field">{ `Email: ${email}` }</p>
            </div>
            <div className="expense-info">
              <p data-testid="total-field">Despesa Total: 0</p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </section>
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
