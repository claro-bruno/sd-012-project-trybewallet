import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveLogin from '../actions/saveLogin';

class HeaderWallet extends React.Component {
  render() {
    const { email, despesas } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          <strong>Email:</strong>
          { email }
        </p>
        <p data-testid="total-field">
          <strong>Despesas:</strong>
          { despesas }
        </p>
        <p data-testid="header-currency-field">
          <strong>Moeda:</strong>
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses
    .reduce((acc, { value, exchangeRates, currency }) => (
      acc + Number(value) * Number(exchangeRates[currency].ask)
    ), 0),
});

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(saveLogin(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWallet);

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.number.isRequired,
};
