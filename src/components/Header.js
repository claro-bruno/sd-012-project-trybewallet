import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    return (
      <header data-testid="header-wallet">
        <h5 data-testid="email-field">
          {`Email: ${email}` }
        </h5>
        <h6 data-testid="total-field">
          { expenses.reduce((acc, curr) => acc + (Number(curr
            .value) * Number(curr.exchangeRates[curr.currency].ask)), 0) }
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
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
