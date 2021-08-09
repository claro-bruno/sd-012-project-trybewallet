import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, disabled, onClick } = this.props;
    return (

      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
      >
        {name}
      </button>

    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
