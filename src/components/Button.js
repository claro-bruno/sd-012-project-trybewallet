import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, onClick, dataTestid } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestid }
        onClick={ onClick }
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
};

export default Button;
