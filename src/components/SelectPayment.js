import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { name, label, onChange, method } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select onChange={ onChange } value={ method } id={ name } name={ name }>
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
  method: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SelectPayment.defaultProps = {
  method: 'Dinheiro',
};

export default SelectPayment;
