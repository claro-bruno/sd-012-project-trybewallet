import React from 'react';
import PropTypes from 'prop-types';

class CategoriesSelect extends React.Component {
  render() {
    const { func, value } = this.props;
    return (
      <label htmlFor="Category">
        Tag:
        <select onChange={ func } value={ value } id="Category" name="Category">
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

CategoriesSelect.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoriesSelect;
