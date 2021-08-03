import React from 'react';
import PropTypes from 'prop-types';

class ButtonDelete extends React.Component {
  render() {
    const {
      props: {
        handleClick,
      },
    } = this;

    return (
      <button
        type="button"
        onClick={ handleClick }
        data-testid="delete-btn"
      >
        Deletar
      </button>
    );
  }
}

const { func } = PropTypes;
ButtonDelete.propTypes = {
  handleClick: func.isRequired,
};

export default ButtonDelete;
