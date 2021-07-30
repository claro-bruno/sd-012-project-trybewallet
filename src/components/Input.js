import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      handleChange,
      type,
      name,
      value,
      children,
    } = this.props;

    return (
      <div>
        <label htmlFor={ name }>{ children }</label>
        <input
          id={ name }
          data-testid={ `${name}-input` }
          type={ type }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Input;
