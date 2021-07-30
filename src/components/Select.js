import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { labelName } = this.props;
    return (
      <label>
        { labelName }
          <select name="currency-select">
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
}

export default Select;