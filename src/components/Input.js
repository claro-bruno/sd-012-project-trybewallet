import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, type, label, inputName, inputValue, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        { `${label}: ` }
        <input
          id={ id }
          type={ type }
          name={ inputName }
          value={ inputValue }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
