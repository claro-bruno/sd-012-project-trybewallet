import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../../Api/FetchCurrencies';

class CurrencySelect extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies, onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ value }
            onChange={ onChange }
          >
            { currencies.map((currency) => (
              <option
                key={ currency }
              >
                { currency }
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

CurrencySelect.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelect);
