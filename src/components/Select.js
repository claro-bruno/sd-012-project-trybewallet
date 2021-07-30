import React from 'react';
import propTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { text, name, options, onChange } = this.props;

    return (
      <label htmlFor={ name }>
        { text }
        <select name={ name } id={ name } onChange={ onChange }>
          {options.map(({ value, description }) => (
            <option key={ value } value={ value }>{description}</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  text: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.shape({
    value: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  })).isRequired,
  onChange: propTypes.func.isRequired,
};

export default Select;
