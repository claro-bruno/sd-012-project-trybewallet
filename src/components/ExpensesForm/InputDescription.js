import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescription extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          id="descricao"
          name="description"
          value={ value }
          placeholder="Adicione uma descrição"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDescription;
