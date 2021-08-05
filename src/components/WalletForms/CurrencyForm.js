import React from 'react';

class CurrencyForm extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            type="select"
            id="currency"
            name="currency"
          >
            <option>centavos</option>
          </select>
        </label>
      </div>
    );
  }
}

export default CurrencyForm;
