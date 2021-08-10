import React from 'react';
import propTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { text, name, options, onChange, dataTestId, selected } = this.props;

    return (
      <label htmlFor={ name }>
        { text }
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
          data-testid={ dataTestId }
        >
          {options.map((option) => (
            <option
              key={ option }
              value={ option }
              selected={ selected === option }
            >
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  text: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  dataTestId: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onChange: propTypes.func.isRequired,
  selected: propTypes.string,
};

Select.defaultProps = {
  selected: '',
};

export default Select;
