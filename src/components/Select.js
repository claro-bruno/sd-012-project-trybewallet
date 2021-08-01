import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      id,
      dataTestId,
      name,
      classNameLabel,
      classNameSelect,
      onChange,
      value,
      textLabel,
      options,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        className={ classNameLabel }
      >

        { textLabel }

        <select
          data-testid={ dataTestId }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          className={ classNameSelect }
        >

          {options.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}

        </select>

      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  name: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameSelect: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  textLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  dataTestId: '',
  name: '',
  classNameLabel: '',
  classNameSelect: '',
  onChange: () => {},
  value: '',
  textLabel: '',
};

export default Select;
