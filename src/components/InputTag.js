import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTag extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" value={ tag } onChange={ handleChange }>
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

InputTag.propTypes = {
  tag: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
