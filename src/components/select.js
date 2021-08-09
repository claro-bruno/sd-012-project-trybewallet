import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { onChange, tag, method } = this.props;

    return (
      <>
        <label htmlFor="Tag">
          Tag
          <select value={ tag } id="Tag" name="tag" onChange={ onChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select
            value={ method }
            id="Método de pagamento"
            name="method"
            onChange={ onChange }
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

Select.propTypes = {
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default Select;
