import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesSelects extends Component {
  render() {
    const { currencies, currency, method, tag, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="coin-select">
          Moeda
          <select
            id="coin-select"
            name="currency"
            value={ currency }
            onChange={ handleChange }
          >
            {currencies.map((currencie) => (
              <option
                key={ `${currencie}${Math.floor(Math.random() * 100 * Date.now())}` }
                value={ currencie }
              >
                {currencie}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-select">
          Método de Pagamento
          <select
            id="payment-select"
            name="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag
          <select id="tag-select" name="tag" value={ tag } onChange={ handleChange }>
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

ExpensesSelects.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ExpensesSelects;
