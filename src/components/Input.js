import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { text, type, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <input
          type={ type }
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
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
