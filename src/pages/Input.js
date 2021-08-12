import React from 'react';
import { func, number } from 'prop-types';

class Input extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          id="valor"
          type="number"
          name="value"
          data-testid="value-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = ({
  handleChange: func.isRequired,
  value: number.isRequired,
});

export default Input;
