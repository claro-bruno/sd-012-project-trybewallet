import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, id, value, options, handleChange } = this.props;

    return (
      <div className="col-auto">
        <label htmlFor={ id } className="form-label">
          {label}
          <select
            className="form-control"
            id={ id }
            name={ id }
            value={ value }
            onChange={ (event) => handleChange(event) }
          >
            {options
              ? options.map((option) => (
                <option
                  key={ option.code ? option.code
                    : option.value || option.name.toLowerCase() }
                  value={ option.code || option.name }
                >
                  {option.code || option.name}
                </option>
              ))
              : ''}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Select;
