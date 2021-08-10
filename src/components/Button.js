import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { testId, disabled, type } = this.props;
    return (
      <button
        id={ testId }
        type={ type === 'submit' ? 'submit' : 'button' }
        disabled={ disabled }
        // onClick={ onClick }
      >
        Entrar
      </button>
    );
  }
}

const { bool, string } = PropTypes;

Button.propTypes = {
  disabled: bool.isRequired,
  testId: string.isRequired,
  // onClick: func.isRequired,
  type: string.isRequired,
};

export default Button;
