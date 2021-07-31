import React, { Component } from 'react';
import { func } from 'prop-types';

class InputEmail extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <label htmlFor="email-input">
        E-mail
        <input
          type="email"
          id="email-input"
          data-testid="email-input"
          name="email"
          onChange={ handleInput }
        />
      </label>
    );
  }
}

InputEmail.propTypes = {
  handleInput: func.isRequired,
};

export default InputEmail;
