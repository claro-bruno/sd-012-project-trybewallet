import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          value={ tag }
          id="tag"
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

Tag.propTypes = {
  handleChange: PropTypes.func,
  tag: PropTypes.string,
}.isRequired;

Tag.defaultProps = {
  handleChange: () => {},
  tag: 'Alimentação',
};

export default Tag;
