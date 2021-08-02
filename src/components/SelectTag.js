import React, { Component } from 'react';

class SelectTag extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }
}

export default SelectTag;
