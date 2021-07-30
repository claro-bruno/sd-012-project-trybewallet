import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Method extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select id="method" onChange={ handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Method.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
