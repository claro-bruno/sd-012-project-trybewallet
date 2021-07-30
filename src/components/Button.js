import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      loginValid,
      handleClick,
      children,
    } = this.props;

    return (
      <div>
        <button
          type="button"
          disabled={ loginValid }
          onClick={ handleClick }
        >
          { children }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  loginValid: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
