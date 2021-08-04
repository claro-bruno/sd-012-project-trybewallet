import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  const { onChange, description } = props;

  return (
    <label htmlFor="description-input">
      Descrição:
      <input
        type="text"
        name="description"
        id="description-input"
        value={ description }
        onChange={ onChange }
      />
    </label>
  );
};

export default Description;

Description.propTypes = {
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
