import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { handle, value } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          onChange={ handle }
          value={ value }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default DescriptionInput;
