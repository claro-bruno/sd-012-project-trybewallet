import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
          />
        </label>
      </div>
    );
  }
}

export default Wallet;
