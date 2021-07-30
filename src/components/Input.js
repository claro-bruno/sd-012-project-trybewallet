import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      label,
      type,
      id,
      name,
      value,
      onChange,
    } = this.props;
    return(
      <label>
        { label }
        <input 
        label={ label }
        type={ type }
        id={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
        />
      </label>
    )
  }
}

export default Input;