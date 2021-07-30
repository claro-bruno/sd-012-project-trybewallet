import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      labelName,
      options,
      onChange,
      name,
    } = this.props;
    return (
      <label>
        { labelName }
          <select onChange={ onChange } name={ name }>
            { options.map((item) => <option key={ item } value={ item }>{ item }</option>) }
          </select>
      </label>
    );
  }
}

Select.defaultProps = {
  labelName: '',
};

Select.propTypes = {
  labelName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Select;