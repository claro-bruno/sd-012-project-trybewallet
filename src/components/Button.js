import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, label, onClick } = this.props;
    return (
      <button
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
}).isRequired;

export default Button;
