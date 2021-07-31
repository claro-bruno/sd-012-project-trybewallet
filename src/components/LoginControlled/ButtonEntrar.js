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

const { string, func } = PropTypes;
ButtonEntrar.propTypes = {
  handleClick: func.isRequired,
  disabled: string,
};

ButtonEntrar.defaultProps = {
  disabled: null,
};

export default ButtonEntrar;
