import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { disabled, label, onClick } = this.props;
    return (
      <button
        type="button"
        disabled={ disabled }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: '',
  onClick: null,
};
