import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { labelText, id, className, name, value, onChange, options } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          id={ id }
          className={ `${className} ${id}` }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          { options.map((option, index) => (
            <option
              key={ index }
              value={ option.name }
            >
              {option.desc}
            </option>))}
        </select>
      </label>
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
  options: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func,
    name: PropTypes.string,
    desc: PropTypes.string,
  })).isRequired,
};

export default Select;
