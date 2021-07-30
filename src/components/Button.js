import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { name, type, label, onClick } = this.props;
    return (
      <button
        name={ name }
        type={ type }
        label={ label }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  } 
}

export default Button;