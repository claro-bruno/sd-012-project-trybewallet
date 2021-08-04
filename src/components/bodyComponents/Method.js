import React from 'react';
import PropTypes from 'prop-types';

class Method extends React.Component {
  render() {
    const { onChange, method } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ onChange }
          value={ method }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Method.propTypes = {
  onChange: PropTypes.func,
  method: PropTypes.string,
}.isRequired;

export default Method;
