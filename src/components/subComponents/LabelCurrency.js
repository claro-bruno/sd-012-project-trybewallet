import React from 'react';
import PropTypes from 'prop-types';

const LabelCurrency = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="form-currency">
      Moeda:
      <select
        id="form-currency"
        name="Moeda"
        onChange={ onChange }
      >

        empty

      </select>
    </label>
  );
};

export default LabelCurrency;

LabelCurrency.propTypes = {
  onChange: PropTypes.func.isRequired,
};
