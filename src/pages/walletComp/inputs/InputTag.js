import React from 'react';
import PropTypes from 'prop-types';

export default class InputTag extends React.Component {
  render() {
    const { tag, onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          id="tag"
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

InputTag.propTypes = {
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
