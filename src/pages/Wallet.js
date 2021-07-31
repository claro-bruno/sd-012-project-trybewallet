import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <div>
            <p>Email:</p>
            <p data-testid="email-field">{ userEmail }</p>
          </div>
          <div>
            <p>Total gastos: R$</p>
            <p data-testid="total-field">0</p>
          </div>
          <div>
            <p>Moeda: R$</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
        <Form />
        <button type="button">Adicionar despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (email) => ({
  userEmail: email.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
