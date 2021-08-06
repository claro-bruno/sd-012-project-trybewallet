import React from 'react';
import { func } from 'prop-types';

class DescriptionInputForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="expense-description">
        Descrição
        <input
          type="text"
          name="description"
          id="expense-description"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DescriptionInputForm.propTypes = {
  handleChange: func.isRequired,
};

export default DescriptionInputForm;
