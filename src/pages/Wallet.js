import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            { userEmail }
          </p>
          <p data-testid="total-field">
            Despesa Total:
            0
            <div data-testid="header-currency-field">
              BRL
            </div>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
