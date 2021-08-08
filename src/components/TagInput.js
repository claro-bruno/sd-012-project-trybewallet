import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagInput extends Component {
  render() {
    const { handle, value } = this.props;
    return (
      <label htmlFor="tag-input">
        Tag
        <select
          id="tag-input"
          name="tag"
          onChange={ handle }
          value={ value }
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

TagInput.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default TagInput;
