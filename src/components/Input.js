import React from 'react';
import propTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { text, name, value, onChange } = this.props;

    return (
      <label htmlFor={ name }>
        { text }
        <input
          type="text"
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
