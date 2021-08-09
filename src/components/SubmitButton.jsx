import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, disabled, buttonTxt, name, id } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        disabled={ disabled }
        name={ name }
        id={ id }
      >
        { buttonTxt }
      </button>
    );
  }
}

Button.propTypes = {
  buttonTxt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  buttonTxt: '',
  name: '',
  id: '',
};

export default Button;
