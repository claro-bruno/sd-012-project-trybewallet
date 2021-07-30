import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      dataTestId,
      onChange,
      value,
      name,
      type,
      placeholder,
      labelName,
      labelClass,
      inputClass,
    } = this.props;

    return (
      <label
        className={ labelClass }
        htmlFor={ name }
      >
        { labelName }
        <input
          data-testid={ dataTestId }
          className={ inputClass }
          name={ name }
          value={ value }
          onChange={ onChange }
          type={ type }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  labelName: '',
  labelClass: '',
  inputClass: '',
  dataTestId: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  labelName: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default Input;
