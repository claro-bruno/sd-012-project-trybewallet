import React from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends React.Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          name="description"
          type="text"
          id="description"
          value={ description }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
