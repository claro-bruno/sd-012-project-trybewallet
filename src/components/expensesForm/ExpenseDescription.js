import React, { Component } from 'react';

class ExpenseDescription extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-description">
          Descrição
          <input
            id="input-description"
            placeholder="adicionar a descrição da despesa"
          />
        </label>
      </div>
    );
  }
}

export default ExpenseDescription;
