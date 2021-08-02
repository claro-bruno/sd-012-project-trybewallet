import React from 'react';

class CurrencySelectForm extends React.Component {
  render() {
    return (
      <label htmlFor="currency-select">
        Moeda
        <select id="currency-select">
          <option>
            BRL
          </option>
        </select>
      </label>
    );
  }
}

export default CurrencySelectForm;
