import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { labelText, id, name, value, children, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          { children.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              {item}
            </option>))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  value: '',
};

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
