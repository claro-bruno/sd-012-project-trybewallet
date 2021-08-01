import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { totalExpense, email } = this.props;
    const cambio = 'BRL';
    return (
      <header className="header">
        <h1>TrybeWallet</h1>
        <div className="user-info">
          <p data-testid="email-field" className="user-email">
            {`E-mail: ${email}`}
          </p>
          <div className="user-expense">
            <span data-testid="total-field">
              {`Despesa Total: ${totalExpense} `}
            </span>
            <span data-testid="header-currency-field">
              {cambio}
            </span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.user.totalExpense,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
