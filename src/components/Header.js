import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    const { email } = this.props;
    const currencySymbol = 'BRL';

    return (
      <div className="header">
        <img
          className="header__img"
          src={ logo }
          alt="logo trybe"
        />
        <div className="user__info">
          <p className="info__email" data-testid="email-field">{`Email: ${email}`}</p>
          <p
            className="info__expense"
            data-testid="total-field"
          >
            {`Despesa Total: ${currencySymbol} 0`}
          </p>
          <div
            className="currency__selector"
            data-testid="header-currency-field"
          >
            <p>Moeda:</p>
            <p data-testid="header__currency__field">
              BRL
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

/* const mapDispatchToProps = {

} */

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
