import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, objectOf } from 'prop-types';

class TotalValueHeader extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <p
        data-testid="total-field"
      >
        { expenses.reduce((acc, crr) => {
          const { currency, value, exchangeRates } = crr;
          const { ask } = exchangeRates[currency];
          return acc + (value * ask);
        }, 0)}
      </p>
    );
  }
}

TotalValueHeader.propTypes = {
  expenses: arrayOf(objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TotalValueHeader);
