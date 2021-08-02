import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { labelText, id, handleChange } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { labelText }
          <input
            type="text"
            id={ id }
            name={ id }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
