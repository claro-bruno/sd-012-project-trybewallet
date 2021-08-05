import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Valor extends Component {
  render() {
    const { value, hadlechange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="text"
            name="valor"
            value={ value }
            onChange={ hadlechange }
          />
        </label>
      </div>
    );
  }
}

Valor.propTypes = {
  hadlechange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Valor;
