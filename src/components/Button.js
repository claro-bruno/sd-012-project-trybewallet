import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, disabled } = this.props;
    return (
      <button
        type="button"
        disabled={ disabled }
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.func.isRequired,
};

export default Button;
