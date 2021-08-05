import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <header>
          <p>Oi eu sou Goku</p>
          <p data-testid="email-field">{ user.email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Wallet);
