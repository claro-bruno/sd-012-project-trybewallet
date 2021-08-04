import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="description">
      Descrição:
      <input type="text" name="Descrição" id="description" onChange={ onChange } />
    </label>
  );
};

export default Description;

Description.propTypes = {
  onChange: PropTypes.func.isRequired,
};
