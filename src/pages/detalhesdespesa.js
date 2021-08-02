import PropTypes from 'prop-types';
import React from 'react';

function DetDespesas(props) {
  const { moedas, value, currency, description, handleChange } = props;
  return (
    <div>
      <label htmlFor="valor">
        valor
        <input
          id="valor"
          value={ value }
          onChange={ handleChange }
          name="value"
        />
      </label>
      <label htmlFor="descrição">
        descrição
        <input
          type="text"
          id="descrição"
          name="description"
          onChange={ handleChange }
          value={ description }
        />
      </label>
      <label htmlFor="moeda">
        moeda
        <select
          id="moeda"
          value={ currency }
          name="currency"
          onChange={ handleChange }
        >
          {moedas.map((m, i) => <option key={ i } value={ m }>{ m }</option>)}
        </select>
      </label>
    </div>
  );
}

DetDespesas.propTypes = {
  moedas: PropTypes.func,
  value: PropTypes.string,
  description: PropTypes.string,
  currency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default DetDespesas;
