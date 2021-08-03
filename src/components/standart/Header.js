import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const {
      props: { expenses },
    } = this;

    const GrandTotal = expenses.reduce((accumulador, expense) => {
      const { exchangeRates, currency, value } = expense;
      const { ask } = exchangeRates[currency];

      accumulador += +ask * +value;

      return accumulador;
    }, 0);

    const roundingValues = (Math.round((GrandTotal + Number.EPSILON) * 100) / 100);
    // fonte: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

    return roundingValues;
  }

  render() {
    const {
      props: { emailStore },
      totalExpenses,
    } = this;

    return (
      <ul>
        <li data-testid="email-field">{`Email: ${emailStore}`}</li>
        <li data-testid="total-field">{ `Despesa Total: R$ ${totalExpenses()}` }</li>
        <li data-testid="header-currency-field">Cambio: BRL</li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
  expenses: state.wallet.expenses,
});

const { string, arrayOf, objectOf, oneOfType, number, object } = PropTypes;
Header.propTypes = {
  emailStore: string.isRequired,
  expenses: arrayOf(
    objectOf(oneOfType([
      string,
      number,
      object,
    ])),
  ).isRequired,
};

export default connect(mapStateToProps, null)(Header);
