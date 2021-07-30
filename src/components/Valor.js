import React from 'react';
import PropTypes from 'prop-types';

class Valor extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          name="valor"
          id="valor"
          type="text"
          value={ valor }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Valor.propTypes = {
  valor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Valor;
