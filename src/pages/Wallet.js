import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <form>
          <label htmlFor="infos">
            Usuario:
            <p data-testid="email-field">{user}</p>
            <div data-testid="total-field">
              Dispesas:
              <span>0</span>
              Moeda:
              <span data-testid="header-currency-field">BRL</span>
            </div>
          </label>
        </form>
      </header>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(String).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
