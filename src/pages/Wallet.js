import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email, amount } = this.props;

    return (
      <header>
        <div>
          <p data-testid="email-field">{ email }</p>
          <div data-testid="total-field">
            0
            { amount }
          </div>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToPropos = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.shape.isRequired,
  amount: PropTypes.shape.isRequired,
};

export default connect(mapStateToPropos)(Wallet);
