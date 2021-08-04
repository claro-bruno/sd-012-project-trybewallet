import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  render() {
    const { onChange, tag } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ onChange }
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
  onChange: PropTypes.func,
  tag: PropTypes.string,
}.isRequired;

export default Tag;
