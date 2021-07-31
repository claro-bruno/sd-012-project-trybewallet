import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { options } = this.props;
    const { optionsArray, id, textLabel, value } = options;

    if (optionsArray.length === 0) {
      return <p>select aqui</p>;
    }

    return (
      <label htmlFor={ id }>
        { textLabel }
        <select id={ id }>
          { optionsArray.map((option, index) => (
            <option key={ value[index] } value={ value[index] }>{ option }</option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  options: PropTypes.shape({
    optionsArray: PropTypes.arrayOf(String).isRequired,
    id: PropTypes.string.isRequired,
    textLabel: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Select;
