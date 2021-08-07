import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          {`Email: ${email}`}
          { console.log(email) }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>

    );
  }

  render() {
    return (
      <div>
        <header>
          <h3>Trybe Wallet</h3>
          { this.renderHeader() }
        </header>

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
