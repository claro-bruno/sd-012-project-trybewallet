import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <header>
          <div data-testid="email-field">
            { user.email }
          </div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(Wallet);
