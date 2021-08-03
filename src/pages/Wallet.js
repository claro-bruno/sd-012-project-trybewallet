import React from 'react';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p
          data-testid="email-field"
        >
          E-mail:
          { email }
        </p>

      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Wallet;
