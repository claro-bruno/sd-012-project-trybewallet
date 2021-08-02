import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { id, label } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          type="number"
          id={ id }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputNumber;
