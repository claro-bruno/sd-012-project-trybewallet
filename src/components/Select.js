import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      labelText,
      id,
      handleChange,
      options,

    } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          { labelText }
          <select id={ id } name={ id } onChange={ handleChange }>
            { options.map((op) => <option key={ op } value={ op }>{op}</option>) }
          </select>
        </label>
      </div>
    );
  }
}

Select.defaultProps = {
  options: [],
};

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired,
};

export default Select;
