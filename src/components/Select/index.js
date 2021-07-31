import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, id, options } = this.props;
    return (
      <label htmlFor={ id }>
        <span>{ label }</span>
        <select id={ id }>
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
}.isRequired;

export default Select;
