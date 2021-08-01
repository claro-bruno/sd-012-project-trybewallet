import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const amount = 0;
    const currency = 'BRL';

    return (
      <header>
        <div>
          <p>
            <span data-testid="email-field">{ `Email: ${email}` }</span>
            <span data-testid="total-field">{ `Dispesa Total: ${amount}` }</span>
            <span data-testid="header-currency-field">{ currency }</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});
export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
