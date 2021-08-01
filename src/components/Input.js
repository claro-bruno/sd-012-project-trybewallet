import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputProps, inputLabel } = this.props;
    return (
      <div>
        <label htmlFor={ inputProps.id }>
          {inputLabel}
          <input { ...inputProps } />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  inputProps: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
};

export default Input;
