import PropTypes from 'prop-types';
import React from 'react';

function InputTag(props) {
  const { tag, handleChange } = props;
  return (
    <form>
      <label htmlFor="Tag">
        Tag
        <select id="Tag" value={ tag } name="tag" onChange={ handleChange }>
          <option>{null}</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </form>
  );
}

InputTag.propTypes = {
  handleChange: PropTypes.func,
  tag: PropTypes.string,
}.isRequired;

export default InputTag;
