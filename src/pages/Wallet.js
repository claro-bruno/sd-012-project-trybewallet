import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      currency: 'BRL',
    };

    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    const { email } = this.props;
    const { total, currency } = this.state;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        { this.renderHeader() }
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

const mapDispatchToProps = (dispatch) => ({
  xablau: (email) => dispatch(saveEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
