import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { moeda, method, tag, onChange } = this.props;
    return (

      <div>
        <label htmlFor="Moeda">
          Moeda
          <select
            name="moeda"
            onChange={ onChange }
            value={ moeda }
            required
          >
            <option>Option1</option>
          </select>
        </label>

        <label htmlFor="metodo">
          Método de pagamento
          <select
            name="method"
            onChange={ onChange }
            value={ method }
            required
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            onChange={ onChange }
            value={ tag }
            required
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
          </select>
        </label>

      </div>

    );
  }
}

Select.propTypes = {
  moeda: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  //  value: PropTypes.string.isRequired,

  // options: PropTypes.arrayOf(
  //   PropTypes.string,
  // ).isRequired,
};

export default Select;
