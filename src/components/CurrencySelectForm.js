import React from 'react';
import { connect } from 'react-redux';
import { func, string, arrayOf } from 'prop-types';
import fetchCurrencies from '../fetchs/FetchCurrencies';

class CurrencySelectForm extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies, handleChange } = this.props;
    return (
      <label htmlFor="currencies">
        Moeda
        <select
          id="currencies"
          name="currency"
          onChange={ handleChange }
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

CurrencySelectForm.propTypes = {
  getCurrencies: func.isRequired,
  currencies: arrayOf(string).isRequired,
  handleChange: func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelectForm);
