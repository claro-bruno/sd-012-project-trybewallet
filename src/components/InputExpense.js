import React from 'react';
import propTypes from 'prop-types';

class InputExpense extends React.Component {
  render() {
    const {
      text,
      type,
      name,
      value,
      onChange,
      dataTestId,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { text }
        <input
          data-testid={ dataTestId }
          type={ type }
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputExpense.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  dataTestId: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onChange: propTypes.func.isRequired,
};

export default InputExpense;
