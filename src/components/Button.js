import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { buttonText, onClick, disabled } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
      >
        { buttonText }
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
