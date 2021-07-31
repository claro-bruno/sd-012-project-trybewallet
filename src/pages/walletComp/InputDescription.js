import React from 'react';

export default class InputDescription extends React.Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição:
        <input type="text" name="description" id="description" />
      </label>
    );
  }
}
