import React from 'react';

class ValueInput extends React.Component {
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

export default ValueInput;
