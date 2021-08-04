import React from 'react';
import PropTypes from 'prop-types';

const SelectTag = (props) => {
  const { onChange, tag } = props;

  return (
    <label htmlFor="tag-select">
      Tag:
      <select
        id="tag-select"
        name="tag"
        value={ tag }
        onChange={ onChange }
      >

        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>

      </select>
    </label>
  );
};

export default SelectTag;

SelectTag.propTypes = {
  onChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
