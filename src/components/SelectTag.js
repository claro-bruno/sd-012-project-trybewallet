import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const { name, label, tag, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select value={ tag } name={ name } onChange={ onChange } id={ name }>
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

SelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tag: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SelectTag.defaultProps = {
  tag: 'Alimentação',
};

export default SelectTag;
