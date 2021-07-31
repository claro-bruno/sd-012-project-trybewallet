import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, text, type, value, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <input
          type={ type }
          name={ name }
          id={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  text: '',
  type: 'text',
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Input;
