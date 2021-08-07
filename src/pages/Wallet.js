import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <section>
          <h3 data-testid="email-field">{`${email}`}</h3>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
