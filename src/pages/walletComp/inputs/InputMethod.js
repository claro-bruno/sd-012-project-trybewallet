import React from 'react';
import PropTypes from 'prop-types';

export default class InputPayment extends React.Component {
  render() {
    const { method, onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ onChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

InputPayment.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
