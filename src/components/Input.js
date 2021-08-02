import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { properties: { labelText, inputProps }, value, onChange } = this.props;
    const { id } = inputProps;
    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          { ...inputProps }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  labelText: '',
};

Input.propTypes = {
  labelText: PropTypes.string,
  properties: PropTypes.shape({
    labelText: PropTypes.string.isRequired,
    inputProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
