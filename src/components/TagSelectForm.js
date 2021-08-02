import React from 'react';

class TagSelectForm extends React.Component {
  render() {
    return (
      <label htmlFor="tag-select">
        Tag
        <select id="tag-select">
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

export default TagSelectForm;
