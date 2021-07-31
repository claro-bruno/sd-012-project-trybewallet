import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { labelText, id } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { labelText }
          <input
            type="text"
            id={ id }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
