import React from 'react';
import PropTypes from 'prop-types';

class InputDescrition extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}
InputDescrition.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDescrition;
