import React from 'react';

class TagSelector extends React.Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
        >
          <option value="food">Alimentação</option>
          <option value="recreation">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default TagSelector;
