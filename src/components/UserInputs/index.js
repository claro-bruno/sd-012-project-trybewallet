import React from 'react';
import PropTypes from 'prop-types';

class UserInputs extends React.Component {
  render() {
    const { id, name, type, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        {name}
        <input
          data-testid={ id }
          type={ type }
          name={ name }
          onChange={ onChange }
          id={ id }
        />
      </label>
    );
  }
}

UserInputs.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default UserInputs;
