import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ user.email }</p>
        <p>Valor total</p>
        <p data-testid="total-field">0</p>
        <p>Câmbio Utilizado</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string }).isRequired,
};

export default connect(mapStateToProps)(Wallet);
