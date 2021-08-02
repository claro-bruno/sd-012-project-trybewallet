import React from 'react';
import PropTypes from 'prop-types';

class Form2 extends React.Component {
  render() {
    const { method, tag, handleChange } = this.props;
    return (
      <form>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select
            id="Método de pagamento"
            value={ method }
            name="method"
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag" value={ tag } name="tag" onChange={ handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form2;

Form2.propTypes = {
  method: PropTypes.string,
  tag: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
