import React from 'react';
import PropTypes from 'prop-types';

class DescriptionInputForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="description-input">
        Descrição
        <input
          type="text"
          name="description-input"
          id="description-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DescriptionInputForm.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default DescriptionInputForm;
