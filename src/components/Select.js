import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { name, label, id, value, onChange, array } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          {
            array.map((item) => (
              <option key={ item }>{ item }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};
