import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, options, testId } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select id={ name } name={ name } data-testid={ testId }>
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
  testId: PropTypes.string,
};

Select.defaultProps = {
  testId: '',
}

export default Select;
