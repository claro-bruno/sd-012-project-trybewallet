import React, { Component } from 'react';

class InputPassword extends Component {
  render() {
    return (
      <label htmlFor="password-input">
        Password
        <input
          type="password"
          id="password-input"
          data-testid="password-input"
        />
      </label>
    );
  }
}

export default InputPassword;
