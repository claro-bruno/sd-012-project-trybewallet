import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user: { email } } = this.props;
    const teste = 0;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">{`email: ${email}`}</p>
          <p data-testid="total-field">{teste}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  user: state.user,
});

Header.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])),
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
