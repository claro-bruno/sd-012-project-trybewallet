import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagSelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select value={ value } onChange={ onChange } id="tag" name="tag">
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

TagSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TagSelect;
