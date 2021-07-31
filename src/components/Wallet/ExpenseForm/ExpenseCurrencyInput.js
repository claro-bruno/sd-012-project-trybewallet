import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';
import fetchCurrencies from '../../../fetchs/fetchCurrencies';

class ExpenseCurrencyInput extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <label
        htmlFor="currencies"
      >
        Moeda
        <select
          id="currencies"
        >
          { currencies.map((currencie) => (
            <option
              key={ currencie }
            >
              { currencie }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

ExpenseCurrencyInput.propTypes = {
  getCurrencies: func.isRequired,
  currencies: arrayOf(string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCurrencyInput);
