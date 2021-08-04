import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      labelText,
      id,
      className,
      name,
      value,
      onChange,
      required,
      options,
    } = this.props;

    const optionsList = Object.keys(options).map((option) => option);

    return (
      (name === 'currency' ? (
        <label htmlFor={ id }>
          { labelText }
          <select
            id={ id }
            className={ `${className} ${id}` }
            name={ name }
            value={ value }
            onChange={ onChange }
            required={ required }
          >
            { optionsList.map((option, index) => (
              <option
                key={ index }
                value={ option }
              >
                {option}
              </option>))}
          </select>
        </label>
      ) : (
        <label htmlFor={ id }>
          { labelText }
          <select
            id={ id }
            className={ `${className} ${id}` }
            name={ name }
            value={ value }
            onChange={ onChange }
            required={ required }
          >
            { options.map((option, index) => (
              <option
                key={ index }
                value={ option.name }
              >
                {option.name}
              </option>))}
          </select>
        </label>
      ))
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func,
    name: PropTypes.string,
    desc: PropTypes.string,
  })).isRequired,
};

export default Select;
