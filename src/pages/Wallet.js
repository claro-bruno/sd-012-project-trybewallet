import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { emailSetted } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ emailSetted }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailSetted: state.user.email,
});

Wallet.propTypes = {
  emailSetted: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
