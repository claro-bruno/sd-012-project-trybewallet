import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      loginValid,
      children,
    } = this.props;

    return (
      <div>
        <button type="button" disabled={ loginValid }>{ children }</button>
      </div>
    );
  }
}

Button.propTypes = {
  loginValid: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
