import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        Wallet
        <header>
          <p>
            Usuário:
            <span data-testid="email-field">{email}</span>
          </p>
          <p>
            Despesa total:
            <span data-testid="total-field">0</span>
          </p>
          <p>
            Câmbio:
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
// const mapStateToProps = (state) => ({ personalInputs: state.reducer.personalInputs });

export default connect(mapStateToProps, null)(Wallet);
