import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick, disabled, buttonText, testId } = this.props;
    return (
      <div>
        <button
          type="submit"
          onClick={ onClick }
          disabled={ disabled }
          data-testid={ testId }
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
  testId: PropTypes.string,
};

Button.defaultProps = {
  testId: '',
};
