import React from 'react';
import propTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { text, type, name, value, onChange, dataTestId, min } = this.props;

    return (
      <label htmlFor={ name }>
        { text }
        <input
          data-testid={ dataTestId }
          type={ type }
          name={ name }
          id={ name }
          min={ min }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  dataTestId: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onChange: propTypes.func.isRequired,
  min: propTypes.string,
};

Input.defaultProps = {
  min: '',
};

export default Input;
