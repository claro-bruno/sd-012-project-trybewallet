import React from 'react';
import PropTypes from 'prop-types';

class TagSelector extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          onChange={ onChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TagSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default TagSelector;
