import React from 'react';
import PropTypes from 'prop-types';

class GenericSelect extends React.Component {
  render() {
    const { name, innerHtml, options, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {innerHtml}
        <select name={ name } onChange={ onChange }>
          {options.map(({ option, value }) => (
            <option key={ option } value={ value }>{option}</option>
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
