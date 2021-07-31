import React from 'react';
import PropTypes from 'prop-types';
import Button from '../standart/Button';

class ButtonEntrar extends React.Component {
  render() {
    const {
      props: {
        handleClick,
        disabled,
      },
    } = this;

    return (
      <Button
        buttonText="Entrar"
        handleClick={ handleClick }
        disabled={ disabled }
      />
    );
  }
}

const { bool, func } = PropTypes;
ButtonEntrar.propTypes = {
  handleClick: func.isRequired,
  disabled: bool,
};

ButtonEntrar.defaultProps = {
  disabled: false,
};

export default ButtonEntrar;
