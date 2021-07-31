import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      props: {
        name,
        labelText,
        type,
        dataTestId,
        value,
        handleChange,
        placeholder,
        validation,
      },
    } = this;

    return (
      <label htmlFor={ name }>
        { labelText }
        <input
          type={ type }
          id={ name }
          name={ name }
          data-testid={ dataTestId }
          value={ value }
          onChange={ handleChange }
          placeholder={ placeholder }
        />
        { validation }
      </label>
    );
  }
}

const { string, func } = PropTypes;
Input.propTypes = {
  name: string.isRequired,
  labelText: string.isRequired,
  type: string.isRequired,
  dataTestId: string,
  value: string.isRequired,
  handleChange: func.isRequired,
  placeholder: string.isRequired,
  validation: string,
};

Input.defaultProps = {
  dataTestId: null,
  validation: null,
};

export default input;
