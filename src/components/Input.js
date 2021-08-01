import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, type, label } = this.props;
    return (
      <label htmlFor={ id }>
        { `${label}: ` }
        <input
          id={ id }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
