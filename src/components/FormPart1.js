import React from 'react';
import PropTypes from 'prop-types';

class Form1 extends React.Component {
  render() {
    const { coins, value, description, currency, handleChange } = this.props;
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input
            id="Valor"
            type="text"
            value={ value }
            name="value"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input
            id="Descrição"
            type="text"
            value={ description }
            name="description"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select
            id="Moeda"
            value={ currency }
            name="currency"
            onChange={ handleChange }
          >
            {coins.map((c, index) => <option value={ c } key={ index }>{ c }</option>) }
          </select>
        </label>
      </form>
    );
  }
}

export default Form1;

Form1.propTypes = {
  coins: PropTypes.func,
  value: PropTypes.string,
  description: PropTypes.string,
  currency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
