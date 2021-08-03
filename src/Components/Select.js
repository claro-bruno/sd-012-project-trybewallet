import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { labelName, id, value, change, name, options } = this.props;
    return (
      <label htmlFor={ id }>
        {labelName}
        <select
          data-testid={ id }
          name={ name }
          value={ value }
          onChange={ change }
          id={ id }
        >
          {
            options.map((option) => <option key={ option }>{option}</option>)
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelName: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Select;
