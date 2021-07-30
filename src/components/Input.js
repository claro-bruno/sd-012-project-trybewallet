import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, onChange, testId } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ testId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  testId: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  testId: '',
  value: undefined,
  onChange: undefined,
};

export default Input;
