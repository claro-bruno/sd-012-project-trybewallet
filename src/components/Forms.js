import React from 'react';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  render() {
    const { valor, moeda, currency, pagamento, handleChange } = this.props;
    return (
      <>
        <label htmlFor="preco">
          Valor
          <input
            data-testid="value-input"
            name="valor"
            value={ valor }
            onChange={ handleChange }
            id="preco"
            type="number"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            data-testid="currency-input"
            name="moeda"
            value={ moeda }
            onChange={ handleChange }
            id="moeda"
          >
            { currency.length ? currency
              .map((item) => <option key={ item }>{ item }</option>) : '' }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            data-testid="method-input"
            name="pagamento"
            value={ pagamento }
            onChange={ handleChange }
            id="pagamento"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </>
    );
  }
}

Forms.defaultProps = {
  currency: '',
};

Forms.propTypes = {
  valor: PropTypes.number.isRequired,
  moeda: PropTypes.string.isRequired,
  currency: PropTypes.arrayOf(PropTypes.string),
  pagamento: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Forms;
