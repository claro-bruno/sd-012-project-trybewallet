import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputRef, properties } = this.props;
    return (
      <label htmlFor={ properties.inputProps.id }>
        { properties.labelText }
        <input
          { ...properties.inputProps }
          ref={ inputRef }
          data-testid={ properties.inputProps.id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string.isRequired,
    }),
  }).isRequired,
  properties: PropTypes.shape({
    labelText: PropTypes.string.isRequired,
    inputProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Input;
