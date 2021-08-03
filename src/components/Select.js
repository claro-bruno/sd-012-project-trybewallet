import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptions = this.handleOptions.bind(this);
  }

  handleOptions() {
    const { options } = this.props;
    return (
      options.map((eachOption) => {
        const isObject = typeof eachOption;
        if (isObject === 'object') {
          return (
            <option
              key={ eachOption.code }
              value={ eachOption.code }
            >
              { eachOption.code }
            </option>
          );
        }
        return (
          <option
            key={ eachOption }
            value={ eachOption }
          >
            { eachOption }
          </option>
        );
      })
    );
  }

  render() {
    const { id, label, selectName, selectValue, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        { `${label}: ` }
        <select
          id={ id }
          name={ selectName }
          value={ selectValue }
          onChange={ handleChange }
        >
          { this.handleOptions() }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  ),
  selectName: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  options: [
    {},
    'abc',
    'def',
  ],
};

export default Select;
