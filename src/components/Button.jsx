import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        className="send"
        type="button"
        disabled={ disabled }
        onClick={ () => onClick() }
      >
        Entrar
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
