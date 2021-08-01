import React from 'react';
import PropTypes from 'prop-types';

function LabelMoeda(props) {
  const { currency, moedas, handleChange } = props;
  return (
    <label htmlFor="Moeda">
      Moeda:
      <select
        className="form-select"
        role="combobox"
        id="Moeda"
        name="currency"
        value={ currency }
        onChange={ handleChange }
      >
        {moedas.map((m, i) => <option key={ i } value={ m }>{ m }</option>)}
      </select>
    </label>
  );
}

export default LabelMoeda;

LabelMoeda.propTypes = {
  currency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
