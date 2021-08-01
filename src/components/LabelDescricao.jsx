import React from 'react';
import PropTypes from 'prop-types';

function LabelDescricao(props) {
  const { description, handleChange } = props;
  return (
    <label htmlFor="desc">
      Descrição:
      <input
        id="desc"
        type="text"
        name="description"
        value={ description }
        onChange={ handleChange }
      />
    </label>
  );
}

export default LabelDescricao;

LabelDescricao.propTypes = {
  description: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
