import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescription extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="expenses-description">
        Descrição
        <input
          id="expenses-description"
          name="description"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default InputDescription;
