import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderTotalValueDisplay from './HeaderTotalValueDisplay';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    const currency = 'BRL';
    return (
      <header>
        <div>
          <p data-testid="email-field">{ `Email: ${userEmail}`}</p>
          <HeaderTotalValueDisplay />
          <p data-testid="header-currency-field">{`Câmbio: ${currency}`}</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (email) => ({
  userEmail: email.user.email,
});

export default connect(mapStateToProps)(Header);
