import React from 'react';

class CurrencySelect extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
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

export default CurrencySelect;
