import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { selectRef, properties, children } = this.props;
    return (
      <label htmlFor={ properties.selectProps.id }>
        { properties.labelText }
        <select
          { ...properties.selectProps }
          ref={ selectRef }
          data-testid={ properties.selectProps.id }
        >
          { children.map((item, index) => (
            <option key={ index } value={ item }>
              {item}
            </option>))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectRef: PropTypes.shape({
    current: PropTypes.shape({ value: PropTypes.string.isRequired }),
  }).isRequired,
  properties: PropTypes.shape({
    labelText: PropTypes.string.isRequired,
    selectProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Select;
