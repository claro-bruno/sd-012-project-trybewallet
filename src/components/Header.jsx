import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          { userEmail }
        </span>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL:</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.func.isRequired,
};
