import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      props: {
        buttonText,
        handleClick,
        disabled,
      },
    } = this;

    return (
      <button
        type="button"
        disabled={ disabled }
        onClick={ handleClick }
      >
        { buttonText }
      </button>
    );
  }
}

const { string, func, bool } = PropTypes;
Button.propTypes = {
  buttonText: string.isRequired,
  handleClick: func.isRequired,
  disabled: bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
