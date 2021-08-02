import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, totalExpenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p data-testid="total-field">
          Despesa Total:
          <span data-testid="header-currency-field">
            { totalExpenses }
            BRL
          </span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.totalExpense,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
