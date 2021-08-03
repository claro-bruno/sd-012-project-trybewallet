import React from 'react';
import PropTypes from 'prop-types';

class SelectPayMethods extends React.Component {
  render() {
    const { id, label, options, name, valueSelected, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <select
          id={ id }
          name={ name }
          value={ valueSelected }
          onChange={ onChange }
        >
          {options.map(({ value, text }) => (
            <option
              key={ value }
            >
              { text }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectPayMethods.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  valueSelected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default SelectPayMethods;
