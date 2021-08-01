import React from 'react';
import PropTypes from 'prop-types';

function LabelTag(props) {
  const { tag, handleChange } = props;
  return (
    <label htmlFor="despesa">
      Tag:
      <select
        className="form-select"
        id="despesa"
        name="tag"
        value={ tag }
        onChange={ handleChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saude">Saúde</option>
      </select>
    </label>
  );
}

export default LabelTag;

LabelTag.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
