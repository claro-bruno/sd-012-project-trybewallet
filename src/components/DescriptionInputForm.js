import React from 'react';

class DescriptionInputForm extends React.Component {
  render() {
    return (
      <label htmlFor="description-input">
        Descrição
        <input type="text" name="description-input" id="description-input" />
      </label>
    );
  }
}

export default DescriptionInputForm;
