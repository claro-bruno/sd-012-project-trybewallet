import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      labelText,
      name,
      testId,
      inputType,
      inputPlaceholder,
      value,
      onChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { labelText }
        </label>
        <input
          value={ value }
          name={ name }
          data-testid={ testId }
          type={ inputType }
          placeholder={ inputPlaceholder }
          onChange={ onChange }
        />
      </div>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
