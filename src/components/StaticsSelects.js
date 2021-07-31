import React from 'react';
import PropTypes from 'prop-types';

class StaticSelects extends React.Component {
  render() {
    const { onChange, values } = this.props;
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            onChange={ onChange }
            value={ values[0] }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            onChange={ onChange }
            value={ values[1] }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

StaticSelects.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default StaticSelects;
