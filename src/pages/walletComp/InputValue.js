import React from 'react';

export default class InputValue extends React.Component {
  render() {
    return (
      <label htmlFor="valor">
        Valor:
        <input type="number" name="valor" id="valor" />
      </label>
    );
  }
}
