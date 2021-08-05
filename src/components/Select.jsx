import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { currencies, method, tag, onChange } = this.props;
    return (
      <div>
        <label htmlFor="coin-select">
          Moeda
          <select
            name="moeda"
            onChange={ onChange }
            id="coin-select"
          >
            { currencies.map((currencie, index) => (
              <option key={ index } value={ currencie }>{ currencie }</option>
            )) }
          </select>
        </label>
        <label htmlFor="payment-select">
          Método de pagamento
          <select
            name="method"
            onChange={ onChange }
            value={ method }
            id="payment-select"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag
          <select
            name="tag"
            onChange={ onChange }
            value={ tag }
            id="tag-select"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>

    );
  }
}

Select.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  //  value: PropTypes.string.isRequired,

  // options: PropTypes.arrayOf(
  //   PropTypes.string,
  // ).isRequired,
};

export default Select;
