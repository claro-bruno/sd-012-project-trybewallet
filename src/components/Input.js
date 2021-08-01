import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, onChange, testId, clss, lclass } = this.props;
    return (
      <label htmlFor={ name } className={ lclass }>
        { label }
        <input
          id={ name }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ testId }
          className={ clss }
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
  clss: PropTypes.string,
  lclass: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  testId: '',
  value: undefined,
  onChange: undefined,
  clss: '',
  lclass: '',
};

export default Input;
