import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, name, onClick, isValid, testeId, bclass } = this.props;
    return (
      <button
        type="button"
        name={ name }
        onClick={ onClick }
        disabled={ !isValid }
        data-testid={ testeId }
        className={ bclass }
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
  bclass: PropTypes.string,
};

Button.defaultProps = {
  isValid: true,
  name: '',
  testeId: '',
  bclass: '',
};

export default Button;
