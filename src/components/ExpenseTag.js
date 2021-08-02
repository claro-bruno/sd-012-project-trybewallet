import React from 'react';
import PropTypes from 'prop-types';

export default class ExpenseTag extends React.Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="currency-select">
        Tag:
        <select name="tag" id="currency-select" value={ tag } onChange={ handleChange }>
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

ExpenseTag.propTypes = {
  tag: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
