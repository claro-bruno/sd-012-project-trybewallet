import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { selectProps, selectLabel, selectOptions } = this.props;
    return (
      <div>
        <label htmlFor={ selectProps.name }>
          {selectLabel}
          <select { ...selectProps }>
            { selectOptions ? selectOptions
              .map((option) => <option key={ selectOptions.id }>{option}</option>)
              : null}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  selectOptions: PropTypes.arrayOf.isRequired,
  selectProps: PropTypes.string.isRequired,
  selectLabel: PropTypes.string.isRequired,
};

export default Select;
