import React from 'react';
import PropTypes from 'prop-types';

class Email extends React.Component {
  render() {
    const { handleChange, email } = this.props;
    return (
      <input
        name="email"
        value={ email }
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ handleChange }
      />
    );
  }
}

Email.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string,
}.isRequired;

export default Email;
