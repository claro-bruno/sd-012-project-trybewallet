import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescription extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="descricao"
          value={ description }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  description: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputDescription;
