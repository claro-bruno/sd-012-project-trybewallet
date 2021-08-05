import React from 'react';

class TagSelect extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
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

export default TagSelect;
