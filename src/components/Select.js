import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      labelText,
      id,
      placeholderText,
      options,
    } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          { labelText }
          <select id={ id }>
            { !placeholderText
            && options.map((op) => <option key={ op } value={ op }>{op}</option>) }
          </select>
        </label>
      </div>
    );
  }
}

Select.defaultProps = {
  options: [],
  placeholderText: '',
};

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  placeholderText: PropTypes.string,
};

export default Select;
