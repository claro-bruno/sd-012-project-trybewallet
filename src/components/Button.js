import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, label, onClick, disable } = this.props;
    return (
      <button
        disabled={ disable }
        name={ name }
        type="submit"
        label={ label }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = ({
  name: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
}).isRequired;

export default Button;
