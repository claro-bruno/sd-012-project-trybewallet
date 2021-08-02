import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const total = 0;
    return (
      <header className="header">
        <h1 className="logo">Fluxo_</h1>
        <p
          data-testid="email-field"
        >
          {`Usuário: ${email}`}
        </p>
        <p
          data-testid="total-field"
        >
          {`Despesas totais: ${total}`}
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({ email: user.email });

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
