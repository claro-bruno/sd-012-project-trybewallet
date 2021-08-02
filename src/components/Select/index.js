import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, id, value, options, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        <span>{ label }</span>
        <select id={ id } value={ value } onChange={ onChange }>
          {
            options.map((option, index) => (
              <option
                value={ option }
                key={ index }
              >
                { option }
              </option>))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(Object),
  onChange: PropTypes.func,
}.isRequired;

export default Select;
