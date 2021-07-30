import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, options } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select id={ name } name={ name }>
          { options.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
