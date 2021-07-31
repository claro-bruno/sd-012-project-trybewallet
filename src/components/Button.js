import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, name, onClick, isValid, testeId } = this.props;
    return (
      <button
        type="button"
        name={ name }
        onClick={ onClick }
        disabled={ !isValid }
        data-testid={ testeId }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  testeId: PropTypes.string,
  isValid: PropTypes.bool,
};

Button.defaultProps = {
  isValid: true,
  name: '',
  testeId: '',
};

export default Button;
