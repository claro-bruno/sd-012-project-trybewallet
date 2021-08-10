import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { htmlFor, id, placeholder, type, value, testId, onChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        <input
          id={ id }
          placeholder={ placeholder }
          type={ type }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

const { string, func } = PropTypes;

Input.propTypes = {
  htmlFor: string.isRequired,
  id: string.isRequired,
  placeholder: string.isRequired,
  type: string.isRequired,
  value: string,
  testId: string.isRequired,
  onChange: func.isRequired,
};

Input.defaultProps = {
  value: '',
};

export default Input;
