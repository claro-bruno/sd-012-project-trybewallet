import React from 'react';

class ValueInputForm extends React.Component {
  render() {
    return (
      <label htmlFor="value-input">
        Valor
        <input type="number" name="value-input" id="value-input" />
      </label>
    );
  }
}

export default ValueInputForm;
