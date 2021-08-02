import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      properties: { labelText, selectProps },
      value, children, onChange } = this.props;
    const { id } = selectProps;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          { ...selectProps }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        >
          { children.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              {item}
            </option>))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  value: '',
  labelText: '',
};

Select.propTypes = {
  labelText: PropTypes.string,
  properties: PropTypes.shape({
    labelText: PropTypes.string.isRequired,
    selectProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  value: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
