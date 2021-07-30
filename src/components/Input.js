import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      testID,
      value,
      onChange,
      placeHolder,
      name,
    } = this.props;

    return (
      <input
        type={ type }
        placeholder={ placeHolder }
        name={ name }
        data-testid={ testID }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testID: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
