import React, { Component } from 'react';

class Tag extends Component {
  render() {
    const taG = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag">
        Tag
        <select data-testid="tag">
          {
            taG.map((tag, index) => (
              <option key={ tag[index] } value={ tag }>
                { tag }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

export default Tag;
