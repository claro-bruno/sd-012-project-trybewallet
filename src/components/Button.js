import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { buttonText, onClick, disabled } = this.props;
    return (
      <div>
        <button
          type="submit"
          onClick={ onClick }
          disabled={ disabled }
        >
          { buttonText }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
