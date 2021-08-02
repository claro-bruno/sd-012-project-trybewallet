import React from 'react';
import PropTypes from 'prop-types';

const LabelCurrency = (props) => {
  const { onChange, currencies } = props;

  return (
    <label htmlFor="form-currency">
      Moeda:
      <select
        id="form-currency"
        name="Moeda"
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
  onChange: PropTypes.func.isRequired,
  currencies: PropTypes.shape(Object).isRequired,
};
