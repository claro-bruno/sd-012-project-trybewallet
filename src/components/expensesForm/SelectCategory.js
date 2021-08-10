import React, { Component } from 'react';

class SelectCategory extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-select-category">
          Tag
          <select
            id="input-select-category"
            placeholder="método de pagamento"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectCategory;
