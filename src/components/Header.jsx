import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>

        <header>
          <p data-testid="email-field">
            Usuário:
            { email }
          </p>
        </header>

      </section>
    );
  }
}

export default Header;
Header.propTypes = {
  email: PropTypes.string.isRequired,
};
