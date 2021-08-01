import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      options,
      labelText,
      name,
      testId,
      value,
      onChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { labelText }
        </label>
        <select
          id={ name }
          value={ value }
          name={ name }
          data-testid={ testId }
          onChange={ onChange }
        >
          { options.map((option) => <option key={ option }>{ option }</option>) }
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  testId: '',
};

export default Select;
