import React from 'react';
import { func } from 'prop-types';

class TagSelectForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="tag-select">
        Tag
        <select
          id="tag-select"
          name="tag"
          onChange={ handleChange }
        >
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

TagSelectForm.propTypes = {
  handleChange: func.isRequired,
};

export default TagSelectForm;
