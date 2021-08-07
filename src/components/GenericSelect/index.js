import React from 'react';
import PropTypes from 'prop-types';

class GenericSelect extends React.Component {
  render() {
    const { id, name, options, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {name}
        <select id={ id } name={ name } onChange={ onChange }>
          {options.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

GenericSelect.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    option: PropTypes.string,
    value: PropTypes.string,
  })),
}.isRequired;

export default GenericSelect;
