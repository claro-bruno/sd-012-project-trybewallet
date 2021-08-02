import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header data-testid="header-wallet">
        <h5 data-testid="email-field">
          {`Email: ${email}` }
        </h5>
        <h6 data-testid="total-field">
          Despesa Total: 0
        </h6>
        <h6 data-testid="header-currency-field">
          Câmbio: BRL
        </h6>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);
