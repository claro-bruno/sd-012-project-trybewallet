import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payament extends Component {
  render() {
    const { method, hadlechange } = this.props;
    return (
      <div>
        <label htmlFor="payament">
          Método de pagamento:
          <select
            id="payament"
            name="method"
            value={ method }
            onChange={ hadlechange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

Payament.propTypes = {
  method: PropTypes.string.isRequired,
  hadlechange: PropTypes.func.isRequired,
};

export default Payament;
