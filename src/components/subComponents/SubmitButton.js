import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = (props) => {
  const { onClick } = props;

  return (
    <button type="button" onClick={ onClick }>
      Adicionar despesa
    </button>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
