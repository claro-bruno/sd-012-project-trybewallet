import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTag extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        tag
        <select
          id="tag"
          name="tag"
          onChange={ onChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

InputTag.propTypes = {
  // value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTag;
