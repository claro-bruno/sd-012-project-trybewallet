import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const {
      dataTestIdEmail,
      email,
      dataTestIdAmount,
      amountOfExpensesLabel,
      amountOfExpenses,
      dataTestIdCurrencyField,
      currentExchange,
    } = this.props;

    return (
      <div>
        <span data-testid={ dataTestIdEmail }>{ email }</span>
        <div>
          <span data-testid={ dataTestIdAmount }>
            { amountOfExpensesLabel }
            <span>{ amountOfExpenses }</span>
            <span data-testid={ dataTestIdCurrencyField }>{ currentExchange }</span>
          </span>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  dataTestIdEmail: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  dataTestIdAmount: PropTypes.string.isRequired,
  amountOfExpensesLabel: PropTypes.string.isRequired,
  amountOfExpenses: PropTypes.number.isRequired,
  dataTestIdCurrencyField: PropTypes.string.isRequired,
  currentExchange: PropTypes.string.isRequired,
};

export default Header;
