import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { name, label, onChange, payment } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select onChange={ onChange } value={ payment } id={ name } name={ name }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectPayment;
