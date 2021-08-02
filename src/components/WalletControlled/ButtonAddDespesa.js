import React from 'react';
import PropTypes from 'prop-types';
import Button from '../standart/Button';

class ButtonAddDespesa extends React.Component {
  render() {
    const {
      props: {
        handleClick,
        disabled,
      },
    } = this;

    return (
      <Button
        buttonText="Adicionar despesa"
        handleClick={ handleClick }
        disabled={ disabled }
      />
    );
  }
}

const { bool, func } = PropTypes;
ButtonAddDespesa.propTypes = {
  handleClick: func.isRequired,
  disabled: bool,
};

ButtonAddDespesa.defaultProps = {
  disabled: false,
};

export default ButtonAddDespesar;
