import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, label, endpoint, value } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select value={ value }>
          { endpoint.map((currency) => (
            <option
              key={ currency }
            >
              { currency }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  endpoint: PropTypes.objectOf('string').isRequired,
};

export default Select;
