import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, name, onClick, isValid } = this.props;
    return (
      <button
        type="button"
        name={ name }
        onClick={ onClick }
        disabled={ !isValid }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
};

Button.defaultProps = {
  isValid: true,
};

export default Button;
