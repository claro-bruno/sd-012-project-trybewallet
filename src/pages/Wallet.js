import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletAction } from '../actions';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    // console.log(this.props);
    return (
      <div>
        <p data-testid="email-field">
          <strong>Email:</strong>
          { email }
        </p>
        <p data-testid="total-field">
          <strong>Despesas:</strong>
          {' '}
          0
        </p>
        <p data-testid="header-currency-field">
          <strong>Moeda:</strong>
          {' '}
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(walletAction(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
