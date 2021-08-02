import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      labelName,
      options,
      onChange,
      name,
      value,
      dataTestId,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
        <select data-testid={ dataTestId } value={ value } id={ name } onChange={ onChange } name={ name }>
          { options.map((item) => <option key={ item } value={ item }>{ item }</option>) }
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  labelName: '',
  dataTestId: '',
};

Select.propTypes = {
  labelName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

export default Select;
