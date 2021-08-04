import React from 'react';
import { func, arrayOf, string } from 'prop-types';

const LabelCurrency = (props) => {
  const { onChange, currencies, currency } = props;

  return (
    <label htmlFor="currency-select">
      Moeda:
      <select
        id="currency-select"
        name="currency"
        value={ currency }
        onChange={ onChange }
      >

        {Object.keys(currencies)
          .filter((curr) => curr !== 'USDT')
          .map((curr) => (
            <option key={ curr }>{curr}</option>
          ))}

      </select>
    </label>
  );
};

export default LabelCurrency;

LabelCurrency.propTypes = {
  onChange: func.isRequired,
  currencies: arrayOf(string).isRequired,
  currency: string.isRequired,
};
