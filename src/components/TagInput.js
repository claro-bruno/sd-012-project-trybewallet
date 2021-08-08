import React, { Component } from 'react';

class TagInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select value={ value } name="tag" id="tag" onChange={ onChange }>
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
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TagInput;
