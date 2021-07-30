import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  render() {
    const {
      handleChange,
      name,
      value,
      children,
      optionsArray,
    } = this.props;

    return (
      <div>
        <label htmlFor={ name }>{ children }</label>
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
        >
          {optionsArray.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
      </div>
    );
  }
}

SelectInput.defaultProps = {
  optionsArray: [],
};

SelectInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optionsArray: PropTypes.arrayOf(PropTypes.string),
};

export default SelectInput;
