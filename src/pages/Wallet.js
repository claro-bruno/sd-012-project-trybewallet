import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const {
      user: {
        email,
      },
      // wallet: {
      //   currencies: [],
      //   expenses: []
      // },
    } = this.props;
    return (
      <header>
        <div>
          <h1>TrybeWallet</h1>
          <p data-testid="email-field">{ email }</p>
        </div>
        <div>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}
Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};
// LER
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Wallet);
