import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const loadExpenses = expenses
      .map((item) => Number(item.exchangeRates[item.currency].ask) * Number(item.value));
    const lenghtExpenses = loadExpenses ? loadExpenses.length : 0;
    const currency = 'BRL';

    return (
      <header>
        <div>
          <p>
            <span data-testid="email-field">{ `Email: ${email}` }</span>
            <span data-testid="total-field">
              Dispesa Total:
              {
                (lenghtExpenses > 0) ? loadExpenses.reduce((acc, curr) => {
                  acc += curr;
                  return acc;
                }, 0) : 0
              }
            </span>
            <span data-testid="header-currency-field">{ currency }</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: undefined,
};
