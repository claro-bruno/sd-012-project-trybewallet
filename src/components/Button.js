import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        <button type="button" disabled>{ children }</button>
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
