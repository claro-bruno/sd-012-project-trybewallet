import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';
import fetchCurrencies from '../fetchs/FetchCurrencies';

class CurrencySelectForm extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currencies">
        Moeda
        <select id="currencies">
          { currencies.map((currency) => (
            <option
              key={ currency }
            >
              { currency }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

CurrencySelectForm.propTypes = {
  getCurrencies: func.isRequired,
  currencies: arrayOf(string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelectForm);
