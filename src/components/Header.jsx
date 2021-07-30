import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <header className="header">
        <p>LOGO</p>
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="hander-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
