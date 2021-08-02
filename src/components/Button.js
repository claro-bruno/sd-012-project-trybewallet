import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      name,
      onClick,
      disabled,
      className,
      dataTestid,
    } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        className={ className }
        data-testid={ dataTestid }
      >
        { name }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
