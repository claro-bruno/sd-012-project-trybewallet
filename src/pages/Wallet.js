import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  /* constructor(props) {
    super(props);
    console.log(this.props);
    const { location: { state: { user: { email } } } } = this.props;
    this.state = {
      email,
    };
  } */

  render() {
    const { email } = this.props;
    const amount = 0;
    const currency = 'BRL';

    return (
      <header>
        <div>
          <p><span data-testid="email-field">{ `Email: ${email}` }</span></p>
          <p><span data-testid="total-field">{ `Dispesa Total: ${amount}` }</span></p>
          <p><span data-testid="header-currency-field">{ currency }</span></p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});
export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

/* Wallet.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      user: PropTypes.shape({
        email: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}; */
