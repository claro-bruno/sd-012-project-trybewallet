import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      id,
      type,
      name,
      value,
      handleChange,
      children,
    } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          { children }
          <input
            data-testid={ id }
            type={ type }
            name={ name }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.defaultProps = { type: 'text' };

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Input;
