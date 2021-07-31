import React from 'react';

export default class InputTag extends React.Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}
