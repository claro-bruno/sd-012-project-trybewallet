import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { description, onChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          className="form-control"
          type="text"
          id="description"
          name="description"
          onChange={ onChange }
          value={ description }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
