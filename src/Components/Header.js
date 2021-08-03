import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logoPaturso from '../Img/logoPaturso.jpg';
import './HeaderStyle.css';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header className="header-content">
        <div>
          <img src={ logoPaturso } alt="Logo Paturso" />
          <h1>Trybe Wallet</h1>
        </div>
        <div>
          <p data-testid="email-field">{`Usuário: ${userEmail}`}</p>
          <p data-testid="total-field">Despesa Total: R$ 0</p>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
