import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { labelContent, id, value, change, name, options } = props;
  console.log(options);
  console.log(labelContent);
  return (
    <label htmlFor={ id }>
      {labelContent}
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
};

Select.propTypes = {
  labelContent: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  change: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  value: 'Not found',
};

export default Select;
