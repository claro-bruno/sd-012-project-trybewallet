import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { selectProps, selectLabel, selectOptions } = this.props;
    console.log(selectOptions);
    return (
      <div>
        <label htmlFor={ selectProps.name }>
          {selectLabel}
          <select { ...selectProps }>
            { selectOptions.map((option) => <option>{option}</option>) }
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  selectProps: PropTypes.string.isRequired,
  selectLabel: PropTypes.string.isRequired,
};

export default Select;
