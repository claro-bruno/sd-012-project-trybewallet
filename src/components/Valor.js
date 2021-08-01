import React from 'react';
import PropTypes from 'prop-types';

class Valor extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          name="value"
          id="value"
          data-testid="value-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Valor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Valor;
