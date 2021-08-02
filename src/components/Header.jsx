import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import { setTotal } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.sendTotal = this.sendTotal.bind(this);
  }

  componentDidUpdate() {
    this.sendTotal();
  }

  sendTotal() {
    const { expenses, dispatchSetTotal } = this.props;
    const total = expenses.reduce((acc, spent) => {
      const { currency } = spent;
      return acc + spent.value * Number(spent.exchangeRates[currency].ask);
    }, 0);
    dispatchSetTotal(total);
  }

  render() {
    const { email, total } = this.props;
    return (
      <header className="header-container">
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        <span data-testid="total-field">
          {`Despesa Total: R$: ${total.toFixed(2)}`}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => (
  {
    email: state.user.email,
    expenses: state.wallet.expenses,
    total: state.wallet.total,
  }
);

const mapDispatchToProps = (dispatch) => ({
  dispatchSetTotal: (total) => (dispatch(setTotal(total))),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchSetTotal: PropTypes.func.isRequired,
  total: PropTypes.number,
};

Header.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
