import React, { Component } from 'react';
import { func } from 'prop-types';

class InputPassword extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <label htmlFor="password-input">
        Password
        <input
          type="password"
          id="password-input"
          data-testid="password-input"
          name="password"
          onChange={ handleInput }
        />
      </label>
    );
  }
}

InputPassword.propTypes = {
  handleInput: func.isRequired,
};

export default InputPassword;
