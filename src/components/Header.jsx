import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './wallet.svg';

class Header extends React.Component {
  render() {
    const { email, total = 0 } = this.props;
    return (
      <header className="header">
        <Logo className="logo" />
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <p data-testid="total-field">{ Number(total).toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number,
};

Header.defaultProps = {
  total: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(Header);
