import React from 'react';
import PropTypes from 'prop-types';

class Currency extends React.Component {
  render() {
    const { currencies, currency, loading, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          data-testid="currency-input"
          value={ currency }
          onChange={ handleChange }
        >
          { loading ? <option>Carregando...</option> : currencies.map((getCurrency) => (
            <option key={ getCurrency }>
              { getCurrency }
            </option>)) }
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Currency;
