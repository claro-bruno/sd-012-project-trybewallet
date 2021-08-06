import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, id, value, name, children, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        <span>{ label }</span>
        <select
          id={ id }
          value={ value }
          name={ name }
          onChange={ onChange }
        >
          { children.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              { item }
            </option>))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  value: '',
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
