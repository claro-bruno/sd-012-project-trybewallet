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
      id,
    } = this.props;

    return (
      <input
        type={ type }
        placeholder={ placeHolder }
        name={ name }
        data-testid={ testID }
        value={ value }
        onChange={ onChange }
        id={ id }
      />
    );
  }
}

Input.defaultProps = {
  id: '',
  type: 'text',
  testID: '',
  placeHolder: '',
  name: '',
};

Input.propTypes = {
  type: PropTypes.string,
  testID: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
