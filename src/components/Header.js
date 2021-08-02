import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    const amount = 0;
    const currency = 'BRL';
    return (
      <header>
        <div>
          <p data-testid="email-field">{ `Email: ${userEmail}`}</p>
          <p data-testid="total-field">{ `Despesa total R$: ${amount}`}</p>
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
