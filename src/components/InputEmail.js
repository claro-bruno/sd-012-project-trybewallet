import React, { Component } from 'react';

class InputEmail extends Component {
  render() {
    return (
      <label htmlFor="email-input">
        E-mail
        <input
          type="email"
          id="email-input"
          data-testid="email-input"
          name="email"
        />
      </label>
    );
  }
}

export default InputEmail;
