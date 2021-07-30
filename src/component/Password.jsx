import React from 'react';
import PropTypes from 'prop-types';

class Password extends React.Component {
  render() {
    const { handleChange, password } = this.props;
    return (
      <input
        name="password"
        value={ password }
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ handleChange }
      />
    );
  }
}

Password.propTypes = {
  handleChange: PropTypes.func.isRequired,
  password: PropTypes.string,
}.isRequired;

export default Password;
